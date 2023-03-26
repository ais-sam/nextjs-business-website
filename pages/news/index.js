
import NewsGrid from "components/news/NewsGrid"
import PageTitle from "components/shared/PageTitle"

const NewsList = () => {
  return (
    <div className="container">
      <PageTitle title="News" />
      <NewsGrid />
    </div>
  );
}

export default NewsList