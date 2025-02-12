import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import { getAllNews } from "@/helpers/news";

export default function NewsSlug() {
  const news = getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
