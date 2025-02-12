import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
  console.log(params.slug);
  const news = DUMMY_NEWS.find((news) => news.slug === params.slug);

  if (!news) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} />
    </div>
  );
}
