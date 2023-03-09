import Button from 'components/shared/Button';
import Underline from 'components/shared/Underline';
import Image from 'next/image';
import protection from "public/icons/Internet Protection.svg"
import product from "public/icons/product.svg"
import goal from "public/icons/goal.svg"

const WhoWeAre = () => {
  return (
    <div className="container py-16">
      {/* Gray title */}
      <p className=" opacity-30 uppercase font-bold">who we are</p>
      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-start gap-20">
        {/* Left */}
        <div className=' lg:basis-[40rem]'>
          <h2 className="text-4xl mb-3">
            Crosson is an international group dedicated to the{" "}
            <Underline text="food industry." />
          </h2>

          <div className='opacity-70 mb-12'>
            <p className='mb-3'>
              Crosson has twenty years’ experience in food, quality, automation
              and software which has been established in the food sector for
              Research, Efficiency and Solution Production.
            </p>
            <p>
              It was not long to discover that supported to knowledge by
              scientific perspectives, would be the solution to the real needs
              of the sector.
            </p>
          </div>

        <div className='flex gap-3 items-center'>
            <Button>About Us</Button>
            <span className='underline text-sm'>Quality Certificates</span>
        </div>
        </div>
        {/* Right */}
        <div className='flex flex-col gap-7 basis-80'>
            <div className='flex items-start gap-3'>
                <Image src={protection} width={35} height={35}/>
                <div>
                    <h5 className='text-md'>Exported to 24 Countries</h5>
                    <p className='opacity-70 text-sm'>168 companies in 24 countries use our machines</p>
                </div>
            </div>
            <div className='flex items-start gap-3'>
                <Image src={product} width={35} height={35}/>
                <div>
                    <h5 className='text-md'>8 Billion Products Per Day</h5>
                    <p className='opacity-70 text-sm'>8 billion products are produced daily from our machines.</p>
                </div>
            </div>
            <div className='flex items-start gap-3'>
                <Image src={goal} width={35} height={35}/>
                <div>
                    <h5 className='text-md'>We touch 850 million people a day</h5>
                    <p className='opacity-70 text-sm'>850 million people use products made by their machines every day</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre