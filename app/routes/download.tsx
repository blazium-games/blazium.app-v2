import type { Route } from "./+types/download";
import style from "css/download.module.css";
import { MetaTags } from "comps/metatags";
import { getArchs, getBuildsData, getOsList, getVersions, hasDotnetSupport } from "~/components/builds_data.server";
import { getIconOS, getPrettyArch, getPrettyOS, type BuildType } from "~/types";
import { Link, useFetcher } from "react-router";
import { useRef } from "react";
import { digitalStores } from "~/data/stores";

export async function loader({ }: Route.LoaderArgs) {
  const data = await getBuildsData();
  const buildType = "release";
  const versions = getVersions(data, buildType);
  const version = versions[0] ?? "";
  const osList = getOsList(data, buildType, version);
  const os = osList[0] ?? "";
  const archs = getArchs(data, buildType, version, os);
  const arch = archs[0] ?? "";
  const supportsDotnet = hasDotnetSupport(data, buildType, version, os);

  const editor = (
    data[buildType]
      .find(v => v.version === version)
      ?.editors
      .find(editor => editor.os === os && (editor.arch ?? arch) === arch && (editor.dotnet ?? false) === false)
  ) ?? null;

  return {
    buildType,
    version,
    options: {
      versions,
      osList,
      archs,
      supportsDotnet,
    },
    ...editor,
  }
}

export async function action({ request }: Route.LoaderArgs) {
  const formData = await request.formData();
  const data = await getBuildsData();
  const buildType = formData.get("build_type") as BuildType ?? "release";
  const versions = getVersions(data, buildType);
  const version = versions.find(v => v === formData.get("version")) ?? versions[0] ?? "";
  const osList = getOsList(data, buildType, version);
  const os = osList.find(os => os === formData.get("os")) ?? osList[0] ?? "";
  const archs = getArchs(data, buildType, version, os);
  const arch = archs.find(arch => arch === formData.get("arch")) ?? archs[0] ?? "";
  const supportsDotnet = hasDotnetSupport(data, buildType, version, os);
  const dotnet = supportsDotnet ? (formData.get("dotnet") ?? "no") === "yes" : false;

  const editor = (
    data[buildType]
      .find(v => v.version === version)
      ?.editors
      .find(editor => editor.os === os && (editor.arch ?? arch) === arch && (editor.dotnet ?? false) === dotnet)
  ) ?? null;

  return {
    buildType,
    version,
    options: {
      versions,
      osList,
      archs,
      supportsDotnet,
    },
    ...editor,
  }
}

function SizeSpan({ bytes }: { bytes: number }) {
  const FORMATS = ["Bytes", "KB", "MB", "GB"];

  let i = 0;
  while (1024 <= bytes) {
    bytes /= 1024;
    ++i;
  }

  return (<span>{(i ? bytes.toFixed(1) : bytes) + " " + FORMATS[i]}</span>);
}

function Timestamp({ timestamp }: { timestamp: string }) {
  return (
    <time dateTime={timestamp} title={new Date(timestamp).toUTCString()}>{
      new Date(timestamp).toLocaleDateString(
        undefined,
        {
          day: "numeric",
          month: "short",
          year: "numeric",
        },
      )
    }</time>
  );
}

export default ({ loaderData }: Route.ComponentProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const fetcher = useFetcher<typeof action>()
  const data = fetcher.data ?? loaderData;

  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>Download Blazium Game Engine</h1>
      <section className={style["download-section"]}>
        <fetcher.Form ref={formRef}>
          <fieldset onChange={(e) => fetcher.submit(e.currentTarget.form, { method: "POST" })}>
            <label>
              <span>Release</span>
              <input hidden type="radio" name="build_type" value="release" defaultChecked />
            </label>
            <label>
              <span>Nightly</span>
              <input hidden type="radio" name="build_type" value="nightly" />
            </label>
          </fieldset>
          <fieldset onChange={(e) => fetcher.submit(e.currentTarget.form, { method: "POST" })}>
            <label>
              <span>Version</span>
              <select name="version">
                {data.options.versions.map(version => (
                  <option key={version} value={version}>{version}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Operating System</span>
              <select name="os">
                {data.options.osList.map(os => (
                  <option key={os} value={os}>{getPrettyOS(os)}</option>
                ))}
              </select>
            </label>
            {data.options.archs.length > 0 && (
              <label>
                <span>Architecture</span>
                <select name="arch">
                  {data.options.archs.map(arch => (
                    <option key={arch} value={arch}>{getPrettyArch(arch)}</option>
                  ))}
                </select>
              </label>
            )}
            {data.options.supportsDotnet && (
              <label>
                <span>C# Support</span>
                <select name="dotnet">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </label>
            )}
          </fieldset>
        </fetcher.Form>
        <div>
          <Link to={data.download_url ?? ""} download className="button">
            {getIconOS(data.os ?? "windows")} Get {data.buildType} {data.version} {data.dotnet && ".NET"}
          </Link>
          <span>
            {data.size && <SizeSpan bytes={data.size} />} &ndash; {data.timestamp && <Timestamp timestamp={data.timestamp} />}
          </span>
        </div>
        <Link to={`/changelog?buildtype=${data.buildType}&version=${data.version}`} className="button secondary">View Changelog</Link>
        <div>
          <div>
            <h2>Export Templates</h2>
            <p>Used to export your games to all supported platforms.</p>
          </div>
          <ul>
            <li>
              <Link to={`https://cdn.blazium.app/release/${data.version}/Blazium_v${data.version}_export_templates.tpz`} download>
                For {data.buildType} {data.version}
              </Link>
            </li>
            <li>
              <Link to={`https://cdn.blazium.app/release/${data.version}/Blazium_v${data.version}_mono_export_templates.tpz`} download>
                For {data.buildType} {data.version} .NET
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className={style["stores-section"]}>
        <h2>Also On</h2>
        <ul>
          {digitalStores.map(store => (
            <li key={store.name}>
              <Link to={store.download_url} className="button secondary"><store.icon />{store.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  </>
}