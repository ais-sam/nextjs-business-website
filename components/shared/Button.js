import React from 'react'
import arrow from "../../public/icons/arrow.svg"
import Image from 'next/image';
const Button = ({children,className,bg}) => {
  return (
    <button className={`flex items-center gap-8 px-6 py-2 ${bg? "bg-"+bg : 'bg-w-yellow'} rounded-md ${className ? className: "text-sm"}`}>
      {children}
      <Image className=" translate-y-[2px] w-[6px]" src={arrow} />
    </button>
  );
}

export default Button