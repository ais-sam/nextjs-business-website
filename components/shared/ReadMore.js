import Image from "next/image";
import arrow from "public/icons/arrow.svg"

const ReadMore = ({className}) => {
  return (
    <span className={`${className} flex items-center text-[13px] gap-3 mt-4 cursor-pointer`}>
      Read More
      <Image src={arrow} width={5} className="translate-y-[1px]" />
    </span>
  );
}

export default ReadMore