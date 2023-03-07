import phone from "public/icons/phone.svg";
import linkedin from "public/icons/Linkedin.svg"
import twitter from "public/icons/Twitter.svg"
import instagram from "public/icons/Instagram.svg"
import english from "public/icons/english.svg"

import Image from "next/image";
import Logo from "/components/shared/Logo"
import Link from "next/link";

const Header = () => {
 
  return (
    <div className="max-w-[2000px] mx-auto">

      <div className="py-4 px-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={phone} width={30} height={30}/>
          <div>
            <span className="block text-sm">Do you need help?</span>
            <span>+0(850) 544 7514</span>
          </div>
        </div>

        <div>
          <Logo/>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
              <Image src={linkedin} width={18} height={18} alt=""/>
              <Image src={instagram} width={18} height={18} alt=""/>
              <Image src={twitter} width={20} height={20} alt=""/>
          </div>
          <div className="flex items-center gap-1">
          <Image src={english} width={32} height={32} alt=""/>
          <div className="font-inter">
            <span className="block opacity-50 text-xs -mb-1">Language</span>
            <span className="text-[13px]">English</span>
          </div>
            
          </div>
        </div>
      </div>


      <div className="py-2">
        <nav className="flex items-center justify-center gap-4 capitalize text-[15px]">
          <Link href="/products">products</Link>
          <Link href="/">solutions</Link>
          <Link href="/">softwares</Link>
          <Link href="/">services</Link>
          <Link href="/">corporate</Link>
          <Link href="/news">news</Link>
          <Link href="/contact">contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
