import NewsCard from "components/news/NewsCard"
import { newsList } from "data/data"


const NewsGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
        {newsList.map(el=><NewsCard key={el.id} {...el}/>)}
    </div>
  )
}

export default NewsGrid