import SectionTitle from "components/shared/SectionTitle";
import Underline from "components/shared/Underline";
import NewsCard from "components/news/NewsCard"
import { newsList } from "data/data";


const RelatedNews = () => {
    const randomNews = Math.floor(Math.random() * 3)
  return (
    <div className="mt-20">
        <div>
            <SectionTitle>
                <Underline text="Related" /> News
            </SectionTitle>
            <p className="lg:w-[43rem] text-lg">
                Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah
                sesame snaps chocolate cake gummies sugar plum cotton candy cupcake
                sweet
            </p>
        </div>
        <div className="flex flex-col lg:flex-row mt-8 gap-8">
            {newsList.slice(randomNews,randomNews + 2).map(el=><NewsCard key={el.id} {...el}/>)}
        </div>
    </div>
  );
}

export default RelatedNews