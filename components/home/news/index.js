import SectionTitle from 'components/shared/SectionTitle'
import SectionMiniTitle from 'components/shared/SectionMiniTitle'
import NewsCard from 'components/home/news/NewsCard'
import {news} from "data/data" 
import Underline from 'components/shared/Underline'

const CompanyNews = () => {
  return (
    <section className='news py-12 container'>
        <SectionMiniTitle>company news</SectionMiniTitle>
        <SectionTitle>News from <Underline text="Crosson"/> </SectionTitle>
        <p className='mb-8'>Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah sesame snaps <br className='hidden lg:block'/> chocolate cake gummies sugar plum cotton candy cupcake sweet</p>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-3'>
            {news.map(el=><NewsCard key={el.id} {...el}/>)}
        </div>
    </section>
  )
}

export default CompanyNews