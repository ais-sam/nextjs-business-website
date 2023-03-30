import {useState } from "react";
import { useRouter } from 'next/router'
import Image from "next/image";
import Logo from "/components/shared/Logo"
import {CgClose, CgMenu} from "react-icons/cg"
import linkedin from "public/icons/Linkedin.svg"
import twitter from "public/icons/Twitter.svg"
import instagram from "public/icons/Instagram.svg"

const MobileMenu = () => {
  const [open,setOpen] = useState(false)
  const router = useRouter()

  const handleClick = ()=>{
    setOpen(!open)
  }

  const handleMenuItemClick = (path)=>{
    setOpen(false)
    router.push(path)
  }


  return (
    <div className="md:hidden py-4  px-2">
        <div className="flex items-center justify-between mb-2">
            <div>
                <Logo/>
            </div>
            <button className="burger"  onClick={handleClick}>
                {open ? <CgClose className="text-2xl"/> : <CgMenu className="text-2xl"/>}
            </button>
        </div>


        <div className={`${!open && "hidden"} mobile-menu overflow-hidden pt-4 absolute bg-white w-full left-0 pl-3 pb-3 z-50`}>
        <nav className="flex flex-col items-start justify-center gap-4 capitalize text-[16px] ">
            <button className="capitalize" onClick={()=>handleMenuItemClick("/about")}>about</button>
            <button className="capitalize" onClick={()=>handleMenuItemClick("/services")}>services</button>
            <button className="capitalize" onClick={()=>handleMenuItemClick("/team")}>team</button>
            <button className="capitalize" onClick={()=>handleMenuItemClick("/pricing")}>pricing</button>
            <button className="capitalize" onClick={()=>handleMenuItemClick("/products")}>products</button>
            <button className="capitalize" onClick={()=>handleMenuItemClick("/news")}>news</button>
            <button className="capitalize" onClick={()=>handleMenuItemClick("/contact")}>contact</button>
        </nav>
        <div className="flex items-center gap-4 my-4 justify-center">
            <Image src={linkedin} width={18} height={18} alt="" />
            <Image src={instagram} width={18} height={18} alt="" />
            <Image src={twitter} width={20} height={20} alt="" />
            </div>
        </div>
  </div>
  )
}

export default MobileMenu