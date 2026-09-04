import type { Route } from "./+types/changelog";
import style from "css/changelog.module.css";
import { MetaTags } from "comps/metatags";
import { Form, Link, redirect } from "react-router";
import { getBuildsData, getVersions } from "~/components/builds_data.server";
import type { BuildType } from "~/types";
import { links } from "~/data/links";

export async function action({ request }: Route.LoaderArgs) {
  const formData = await request.formData();
  return redirect(`/changelog?v=${formData.get("buildtype")}_${formData.get("version")}`);
}

export async function loader({ request }: Route.LoaderArgs) {
  const v = new URL(request.url).searchParams.get("v");

  const data = await getBuildsData();
  const buildType = v?.split("_")[0] as BuildType | undefined ?? "release";
  const versions = getVersions(data, buildType);
  const version = v?.split("_")[1] ?? versions[0] ?? "";

  const response = await fetch(`https://cdn.blazium.app/${buildType}/${version}/changelog.txt`);

  if (!response.ok) {
    throw new Response(null, { status: 404 });
  }

  const text = await response.text();

  const commitsSHA = text.match(/Changelog: (?<a>[a-z0-9]{40}) -> (?<b>[a-z0-9]{40})/)?.groups;
  const previousSHA = commitsSHA?.["a"] ?? "";
  const currentSHA = commitsSHA?.["b"] ?? "";

  const totalCommits = text.match(/- Total Commits: (?<a>\d+)/)?.groups?.["a"] ?? 0;
  const totalPRs = text.match(/- Total PRs: (?<a>\d+)/)?.groups?.["a"] ?? 0;
  const totalContributors = text.match(/- Total Contributors: (?<a>\d+)/)?.groups?.["a"] ?? 0;

  const commitsRegEx = /Commit SHA: (?<sha>[a-z0-9]{40})\nDate: (?<date>.+)\nUser: (?<user>[a-zA-Z0-9-]+)\nMessage: (?<message>[\s\S]*?(?=\n))/g;
  const commits = [...text.matchAll(commitsRegEx)].map(commit => ({
    sha: commit.groups?.["sha"] ?? "",
    date: (new Date(commit.groups?.["date"] ?? "")).toISOString(),
    user: commit.groups?.["user"] ?? "",
    message: commit.groups?.["message"] ?? "",
  }));

  const contributors = [...text.matchAll(/- (?<user>[a-zA-Z0-9-]+): (?<n>\d+) contributions/g)].map(contributor => ({
    user: contributor.groups?.["user"] ?? "",
    contributions: contributor.groups?.["n"] ?? "",
  }));

  return {
    versions,
    info: {
      version,
      buildType,
      previousSHA,
      currentSHA,
      totalCommits,
      totalPRs,
      totalContributors,
    },
    commits,
    contributors,
  };
}

function Commit({ data }: { data: any }) {
  const date = new Date(data.date);

  const dateOptions: Intl.DateTimeFormatOptions = {
    dateStyle: "long",
  };

  const datetimeOptions: Intl.DateTimeFormatOptions = {
    dateStyle: "long",
    timeStyle: "long",
  };

  return (
    <article className={style["commit-article"]}>
      <h3>
        Commit <Link to={`${links.engine_repo}/commit/${data.sha}`} target="_blank"><code>
          {data.sha.slice(0, 7)}
        </code></Link> by <Link to={`${links.engine_repo}/commits?author=${data.user}`} target="_blank">
          <img src={`https://github.com/${data.user}.png?size=24`} alt={`${data.user}`} height={24} width={24} loading="lazy" />
          {data.user}
        </Link> &ndash; <time dateTime={data.date} title={date.toLocaleString("en-US", datetimeOptions)}>
          {date.toLocaleDateString("en-US", dateOptions)}
        </time>
      </h3>
      <p>{data.message}</p>
    </article>
  )
}

export default ({ loaderData }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>Blazium Engine Changelog</h1>
      <section>
        <Form method="POST">
          <label>
            <span>Build Type</span>
            <select name="buildtype" defaultValue={loaderData.info.buildType}>
              <option value="release">release</option>
              <option value="nightly">nightly</option>
            </select>
          </label>
          <label>
            <span>Version</span>
            <select name="version" defaultValue={loaderData.info.version}>
              {loaderData.versions.map(version => (
                <option key={version} value={version}>{version}</option>
              ))}
            </select>
          </label>
          <button type="submit">Get Changelog</button>
        </Form>
      </section>
      <section>
        <div>
          <h2>Changelog for {loaderData.info.buildType} {loaderData.info.version}</h2>
          <div>
            <Link to={`${links.engine_repo}/compare/${loaderData.info.previousSHA}...${loaderData.info.currentSHA}`}><code>
              {loaderData.info.previousSHA.slice(0, 7)}&hellip;{loaderData.info.currentSHA.slice(0, 7)}
            </code></Link>
            <p><strong>{loaderData.info.totalCommits}</strong> <span>commits</span></p>
            <p><strong>{loaderData.info.totalContributors}</strong> <span>contributors</span></p>
          </div>
        </div>
        <hr />
        {loaderData && loaderData.commits.map(commit => (<Commit key={commit.sha} data={commit} />))}
      </section>
    </main>
  </>
}