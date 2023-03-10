import React from 'react'

const Underline = ({text,bottom}) => {
  return (
    <span className='relative z-20'>
        {text}
        <span className={`absolute w-full h-[7px] bg-w-yellow left-0 ${bottom ? "bottom-"+bottom:"bottom-[6px]"}`} style={{zIndex:"-1"}}></span>
    </span>
  )
}

export default Underline