import type { Route } from "./+types/changelog";
import style from "css/changelog.module.css";
import { MetaTags } from "comps/metatags";
import { Form, Link } from "react-router";
import { getBuildsData, getVersions } from "~/components/builds_data.server";
import type { BuildType } from "~/types";

const repo = "https://github.com/blazium-games/blazium";

export async function loader({ request }: Route.LoaderArgs) {
  const searchParams = new URL(request.url).searchParams
  const data = await getBuildsData();
  const buildType = searchParams.get("buildtype") as BuildType ?? "release";
  const versions = getVersions(data, buildType);
  const version = versions.find(v => v === searchParams.get("version")) ?? versions[0] ?? "";

  const response = await fetch(`https://cdn.blazium.app/${buildType}/${version}/changelog.txt`);

  if (!response.ok) {
    throw new Response(undefined, { status: 404 });
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
      <h3>{data.message}</h3>
      <p>
        Commit <Link to={`${repo}/commit/${data.sha}`} target="_blank"><code>
          {data.sha.slice(0, 7)}
        </code></Link> by <Link to={`${repo}/commits?author=${data.user}`} target="_blank">
          <img src={`https://github.com/${data.user}.png?size=24`} alt={`${data.user}`} height={24} width={24} loading="lazy" />
          {data.user}
        </Link> &ndash; <time dateTime={data.date} title={date.toLocaleString(undefined, datetimeOptions)}>
          {date.toLocaleDateString(undefined, dateOptions)}
        </time>
      </p>
    </article>
  )
}

export default ({ loaderData }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>Blazium Engine Changelog</h1>
      <section>
        <Form>
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
            <Link to={`${repo}/compare/${loaderData.info.previousSHA}...${loaderData.info.currentSHA}`}><code>
              {loaderData.info.previousSHA.slice(0, 7)}&hellip;{loaderData.info.currentSHA.slice(0, 7)}
            </code></Link>
            <p><strong>{loaderData.info.totalCommits}</strong> <span>commits</span></p>
            <p><strong>{loaderData.info.totalContributors}</strong> <span>contributors</span></p>
          </div>
        </div>
        {loaderData && loaderData.commits.map(commit => (<Commit key={commit.sha} data={commit} />))}
      </section>
    </main>
  </>
}