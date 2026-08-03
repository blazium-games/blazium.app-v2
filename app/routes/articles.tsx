import type { Route } from "./+types/articles";
import style from "css/articles.module.css";
import { MetaTags } from "comps/metatags";
import { marked } from "marked";
import type { ArticleMetadata } from "~/types";

export async function loader({ params }: Route.LoaderArgs) {
  const metadataRes = await fetch(`https://cdn.blazium.app/articles/${params.slug}/meta.json`);

  if (!metadataRes.ok) {
    throw new Response(undefined, { status: 404 });
  }

  const metadata: ArticleMetadata = await metadataRes.json();

  const contentRes = await fetch(metadata.content_md);

  if (!contentRes.ok) {
    throw new Response(undefined, { status: 404 });
  }

  const content = await marked.parse(await contentRes.text());

  return {
    metadata,
    content,
  };
}

export default ({ loaderData }: Route.ComponentProps) => {
  const metadata = loaderData.metadata;
  return <>
    <MetaTags
      title={metadata.title}
      description={metadata.description}
      image={metadata.cover}
    />
    <main className={style["main"]}>
      <time dateTime={metadata.date}>{
        new Date(metadata.date).toLocaleDateString(undefined, { dateStyle: "long" })
      }</time>
      <h1>{metadata.title}</h1>
      <img src={metadata.cover} alt={metadata.title} />
      <section dangerouslySetInnerHTML={{ __html: loaderData.content }} />
  </main>
</>
}