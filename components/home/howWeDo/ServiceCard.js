import service from "public/images/service.jpg"
import arrow from "public/icons/arrow.svg"
import Image from "next/image"

const ServiceCard = ({title,description,image}) => {
  return (
    <div className="flex-1">
        <Image src={image} className=" lg:h-64 object-cover"/>
        <h4 className="text-lg mt-4">{title}</h4>
        <p className="text-sm opacity-70 pr-24 mb-3">{description}</p>
        <div className="flex gap-3">
            <span className="text-sm">Read More</span>
            <Image src={arrow} width={6}/>
        </div>
    </div>
  )
}

export default ServiceCard