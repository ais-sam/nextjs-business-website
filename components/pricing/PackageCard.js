import Button from 'components/shared/Button'
import Image from 'next/image'
import checkmark from "public/icons/blue-checkmark.svg"


const PackageCard = ({type,price,description,features,isFeatured}) => {
  return (
    <div className={`p-6 ${isFeatured?'bg-w-yellow':'bg-white'}`}>
       
        <div className={`mb-6 p-[6px] font-bold uppercase ${isFeatured ?'bg-white':'bg-[#F1F1F1]'} w-fit text-xs `}>{type}</div>
 
        <div className='text-5xl mb-3'>${price}<span className=' opacity-50 text-sm'>/per month</span></div>
        
        <p className='opacity-70 mb-3 text-sm'>{description}</p>
        
        <ul className=' leading-loose mb-2'>
            {features.map(feature=>{
                return <li className='flex gap-2 text-[13px] mb-4'><Image src={checkmark}/>{feature}</li>
            })}
        </ul>

        <Button bg={isFeatured&&"white"}>Get Started ${price}</Button>
    </div>
  )
}

export default PackageCard