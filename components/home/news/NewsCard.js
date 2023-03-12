import Button from 'components/shared/Button'
import Image from 'next/image'
import React from 'react'
import news1 from "public/images/news-1.png"

const NewsCard = ({image,title,description}) => {
  return (
    <div className='flex gap-8 items-center'>
        <Image src={image} className="w-full sm:w-72 lg:w-60"/>
        <div>
            <h4 className='text-lg mb-2 lg:w-56'>{title}</h4>
            <p className='text-sm mb-5 lg:w-64'>{description}</p>
            <Button>Read More</Button>
        </div>
    </div>
  )
}

export default NewsCard