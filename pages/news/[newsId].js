import RelatedNews from "components/news/RelatedNews"
import NewsDetails from "components/news/NewsDetails"
import PageTitle from "components/shared/PageTitle"

const News = () => {
  const title  = "Crosson Holding’s 58th ordinary general assembly convened"
  return (
    <div className="container">
      <PageTitle titleClassName="lg:w-[40rem]" title={title} />
      <NewsDetails/>
      <RelatedNews/>
    </div>
  )
}

export default News