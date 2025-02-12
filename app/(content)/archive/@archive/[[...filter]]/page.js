import NewsList from "@/components/news-list";
import {
  getAllNews,
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/helpers/news";
import Link from "next/link";

export default function NewsYearPage({ params }) {
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];

  const date = getAvailableNewsYears();

  let news;

  let newsContent = <p>No news found for the selected period</p>;

  let months;
  let newsTitle;

  if (selectedYear && !selectedMonth) {
    months = getAvailableNewsMonths(selectedYear);
    news = getNewsForYear(selectedYear);
    newsTitle = `News of ${selectedYear}`;
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    newsTitle = `News of ${selectedMonth}. month`;
  }

  if (news && news.length > 0) newsContent = <NewsList news={news} />;

  return (
    <>
      <header id="archive-header">
        <ul>
          {date.map((year) => (
            <li key={year}>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
        {selectedYear && months ? (
          <ul>
            {months.map((month) => (
              <li>
                <Link href={`/archive/${selectedYear}/${month}`}>{month}</Link>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </header>
      <h1>{newsTitle}</h1>
      {newsContent}
    </>
  );
}
