import service from "public/images/service.jpg"
import arrow from "public/icons/arrow.svg"
import Image from "next/image"

const ServiceCard = () => {
  return (
    <div>
        <Image src={service}/>
        <h4 className="text-lg mt-4">Product Design</h4>
        <p className="text-sm opacity-70 pr-24 mb-3">Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.</p>
        <div className="flex gap-3">
            <span className="text-sm">Read More</span>
            <Image src={arrow} width={6}/>
        </div>
    </div>
  )
}

export default ServiceCard