import NewsList from "@/components/news-list";
import { getAllNews } from "@/helpers/news";

export default async function NewsSlug() {
  // const res = await fetch("http://localhost:8080/news");

  // const news = await res.json();

  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />;
    </>
  );
}
