import SectionTitle from "components/shared/SectionTitle"
import Link from "next/link"
import Image from "next/image"
import arrow from "public/icons/arrow.svg"

const PageTitle = ({title}) => {
  return (
    <div>
        <SectionTitle>{title}</SectionTitle>
        {/* BreadCrumb */}
        <div className="flex gap-2 items-center text-xs">
          <Link href="/">Home</Link>
          <Image src={arrow} width={6} className=" translate-y-[1px]"/>
          <Link href="/">Corporate</Link>
          <Image src={arrow} width={6} className=" translate-y-[1px]"/>
          <Link href="/">About Crosson</Link>
        </div>
      </div>
  )
}

export default PageTitle