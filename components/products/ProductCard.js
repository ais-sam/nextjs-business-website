import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({image,title}) => {
  return (
    <Link href={'/products/' + title} className='bg-white shadow-sm'>
        <Image src={image}/>
        <div className='p-4'>
            <span>{title}</span>
        </div>
    </Link>
  )
}

export default ProductCard