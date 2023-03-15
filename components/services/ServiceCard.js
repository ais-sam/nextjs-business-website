import ReadMore from 'components/shared/ReadMore'
import Image from 'next/image'
import React from 'react'

const ServiceCard = ({service,className}) => {
    const {image,title,description}= service
  return (
    <div className={className}>
        <Image src={image} width={48} className="mb-6"/>
        <div>
            <h4 className='md:w-44'>{title}</h4>
            <p className='mt-2 text-sm opacity-70 md:w-56'>{description}</p>
        </div>
        <ReadMore/>
    </div>
  )
}

export default ServiceCard