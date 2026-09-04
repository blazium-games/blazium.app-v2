import type { Route } from "./+types/news";
import style from "css/news.module.css";
import { MetaTags } from "comps/metatags";
import type { ArticleIndexData, ArticlesIndex } from "~/types";
import { Link } from "react-router";
import { FaRss } from "react-icons/fa6";

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
    <article className={style["article"]}>
      <img src={data.cover} alt={data.slug} loading="lazy" />
      <div>
        <Link to={data.slug}><h2>{data.title}</h2></Link>
        <p>{truncateText(data.description, 120)}</p>
        <time dateTime={data.date}>{
          new Date(data.date).toLocaleDateString("en-US", { dateStyle: "long" })
        }</time>
      </div>
    </article>
  )
}

function truncateText(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}

export default ({ loaderData }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>News</h1>
      <nav>
        <Link to="https://cdn.blazium.app/articles/rss.xml" className="button secondary">
          <FaRss /> RSS
        </Link>
      </nav>
      <section>
        {loaderData?.items.map(entry => <ArticleCard key={entry.slug} data={entry} />)}
      </section>
    </main>
  </>
}