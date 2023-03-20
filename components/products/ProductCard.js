import Image from 'next/image'

const ProductCard = ({image,title}) => {
  return (
    <div className='bg-white shadow-sm'>
        <Image src={image}/>
        <div className='p-4'>
            <span>{title}</span>
        </div>
    </div>
  )
}

export default ProductCard