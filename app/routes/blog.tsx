import type { Route } from "./+types/blog";
import style from "css/blog.module.css";
import { MetaTags } from "comps/metatags";
import type { ArticleIndexData, ArticlesIndex } from "~/types";
import { Link } from "react-router";

export async function loader({ }: Route.LoaderArgs) {
  const response = await fetch(`https://cdn.blazium.app/articles/index.json`);

  if (!response.ok) {
    return null;
  }

  const index: ArticlesIndex = await response.json();
  return index;
}

function ArticleCard({ data }: { data: ArticleIndexData }) {
  return (
    <Link to={`/articles/${data.slug}`}>
      <article className={style["article"]}>
        <img src={data.cover} alt={data.slug} loading="lazy" />
        <time dateTime={data.date}>{
          new Date(data.date).toLocaleDateString(undefined, { dateStyle: "long" })
        }</time>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </article>
    </Link>
  )
}

export default ({ loaderData }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>Blog</h1>
      <Link to="https://cdn.blazium.app/articles/rss.xml">RSS Feed</Link>
      <section>
        {loaderData?.items.map(entry => <ArticleCard key={entry.slug} data={entry} />)}
      </section>
    </main>
  </>
}