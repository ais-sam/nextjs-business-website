import Image from "next/image"
import customer from "public/images/customer.jpg"

const CustomerCircle = ({type}) => {
    if (type=="cta") {
        return (
          <div className="w-20 h-20 overflow-hidden rounded-full flex items-center justify-center bg-w-yellow">
            <span className="capitalize text-xs text-center font-inter">become partner</span>
          </div>
        );
    }
  return (
    <div className="w-20 h-20 overflow-hidden rounded-full">
        <Image src={customer} className="w-full"/>
    </div>
  )
}

export default CustomerCircle