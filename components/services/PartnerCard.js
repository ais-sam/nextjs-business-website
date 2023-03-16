import Image from "next/image"

const PartnerCard = ({img,name}) => {
  return (
    <div className='bg-white p-8 border border-[#DFDFDF] flex items-center justify-center'>
        <Image src={img} alt={name} className=" w-28"/>
    </div>
  )
}

export default PartnerCard