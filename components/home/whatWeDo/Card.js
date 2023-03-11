
import Image from 'next/image'
import packaging from "public/icons/packaging.svg"

const Card = ({title,icon,active}) => {

  return (
    <div className={`flex flex-col items-center p-4 ${title.startsWith("Filling") && "wwd-shadow bg-white" }`}>
      <Image src={icon} width={50} height={50} className="mb-4" />
      <h6 className={`text-center text-sm ${title.startsWith("Filling") ?"max-w-[9rem]":"max-w-[8rem]" }`}>{title}</h6>
    </div>
  );
}

export default Card