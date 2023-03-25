import Button from 'components/shared/Button'
import Image from 'next/image'
import Link from 'next/link'


const NewsCard = ({image,title,description}) => {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-12'>
        <Image src={image} className="w-full sm:w-56"/>
        <div>
            <h3 className='mb-2 text-lg lg:w-60'>{title}</h3>
            <p className='mb-5 opacity-70 text-sm lg:w-60'>{description}</p>
            <Link href={`/news/${title}`}>
                <Button>Read More</Button>
            </Link>
        </div>

    </div>
  )
}

export default NewsCard