import NewsList from "@/components/news-list";
import { getAllNews } from "@/helpers/news";

export default function LatestPage() {
  const news = getAllNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={news} />
    </>
  );
}
