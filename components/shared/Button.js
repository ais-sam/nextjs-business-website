import React from 'react'
import arrow from "../../public/icons/arrow.svg"
import Image from 'next/image';
const Button = ({children}) => {
  return (
    <button className="flex items-center gap-8 px-6 py-3 text-sm bg-w-yellow rounded-md">
      {children}
      <Image className=" translate-y-[2px] w-[6px]" src={arrow} />
    </button>
  );
}

export default Button