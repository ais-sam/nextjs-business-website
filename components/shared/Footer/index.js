import Underline from 'components/shared/Underline'
import ContactInfoCard from 'components/shared/Footer/ContactInfoCard'
import Image from 'next/image'
import carrer from "../../../public/icons/carrer.svg"
import arrow from "../../../public/icons/arrow.svg"
import Copyright from 'components/shared/Footer/Copyright'

const Footer = () => {
  return (
    <div>
      <div className="footer py-10">
        <div className='container'>
          {/* Top */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h4 className="text-lg">
              {/* Have a <Underline text="any questions?" bottom="[100px]" /> */}
              Have a any <span className='question'>questions</span>
              <br /> Contact Us{" "}
            </h4>
            <div className="flex flex-col  lg:flex-row items-start  lg:items-center gap-4 lg:gap-2">
              <ContactInfoCard type="phone" />
              <ContactInfoCard type="message" />
              <ContactInfoCard type="location" />
            </div>
          </div>

          {/* Buttom */}
          <div className="flex flex-col lg:flex-row gap-4 items-start justify-between mt-14 mb-10">
            {/* Left */}
            <div className="flex flex-col gap-4 lg:gap-20 lg:flex-row">
              <div>
                <h4 className="text-xl mb-3">Products</h4>
                <ul className="leading-8 text-sm opacity-80">
                  <li>Filling Machines</li>
                  <li>Bottle Filling Series</li>
                  <li>Package Machines</li>
                  <li>Linear Machines</li>
                  <li>Rotary Machines</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl mb-3">Solutions</h4>
                <ul className="leading-8 text-sm opacity-80">
                  <li>End of Line Solutions</li>
                  <li>Food Industry Machines Software</li>
                  <li>Research Solutions</li>
                  <li>Conveyor Solutions</li>
                  <li>Special Solutions Your Needs</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl mb-3">Corporate</h4>
                <ul className="leading-8 text-sm opacity-80">
                  <li>About Us</li>
                  <li>Our Values</li>
                  <li>Human Resources</li>
                  <li>News</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            {/* right */}
            <div className='flex flex-col lg:flex-row items-start gap-4'>
              <Image src={carrer} />
              <div>
                <h4 className="text-xl mb-4">Career Opportunities</h4>
                <p className="text-sm leading-6 max-w-sm mb-5">
                  Cake pudding lollipop pastry cupcake chocolate. Gummi bears
                  halvah sesame snaps.
                </p>
                <button className="flex items-center gap-8 px-6 py-3 text-sm bg-w-yellow rounded-md">
                  Opennig Positions 
                  <Image className=' translate-y-[2px] w-[6px]' src={arrow}/>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
        {/* Copyright */}
        <Copyright/>
    </div>
  );
}

export default Footer