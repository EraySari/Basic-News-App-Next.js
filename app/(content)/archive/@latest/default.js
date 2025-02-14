import NewsList from "@/components/news-list";
import { getAllNews } from "@/helpers/news";

export default async function LatestPage() {
  const news = await getAllNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={news} />
    </>
  );
}
