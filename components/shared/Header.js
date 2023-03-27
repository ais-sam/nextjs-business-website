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
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="py-4 px-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={phone} width={30} height={30} />
            <div>
              <span className="block text-sm">Do you need help?</span>
              <span>+0(850) 544 7514</span>
            </div>
          </div>

          <div>
            <Logo />
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <Image src={linkedin} width={18} height={18} alt="" />
              <Image src={instagram} width={18} height={18} alt="" />
              <Image src={twitter} width={20} height={20} alt="" />
            </div>
            <div className="flex items-center gap-1">
              <Image src={english} width={32} height={32} alt="" />
              <div className="font-inter">
                <span className="block opacity-50 text-xs -mb-1">Language</span>
                <span className="text-[13px]">English</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <nav className="flex items-center justify-center gap-4 capitalize text-[15px]">
            <Link href="/about">about</Link>
            <Link href="/services">services</Link>
            <Link href="/team">team</Link>
            <Link href="/pricing">pricing</Link>
            <Link href="/products">products</Link>
            <Link href="/news">news</Link>
            <Link href="/contact">contact</Link>
          </nav>
        </div>
      </div>


      {/* Mobile */}
      <div className="md:hidden py-4  px-2">
        {/* top */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <Logo />
          </div>
          <div className="burger-icon">
            <label className="burger" for="check">
              <input type="checkbox" id="check" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
    {/* bottom */}
        <div className="mobile-menu h-0 overflow-hidden">
          <nav className="flex flex-col items-start justify-center gap-4 capitalize text-[15px]">
              <Link href="/about">about</Link>
              <Link href="/services">services</Link>
              <Link href="/team">team</Link>
              <Link href="/pricing">pricing</Link>
              <Link href="/products">products</Link>
              <Link href="/news">news</Link>
              <Link href="/contact">contact</Link>
            </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
