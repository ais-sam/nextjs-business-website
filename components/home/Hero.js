import React from 'react'
import Underline from 'components/shared/Underline';
import Button from 'components/shared/Button';
import phone from "../../public/icons/phone.svg"
import Image from 'next/image';


const Hero = () => {
  return (
    <section className="hero flex items-center justify-start">
        <div className='container'>
            <div className='max-w-lg'>
                <h1 className='text-4xl mb-3'>We make Filling & Packaging Machines for <Underline text="Food Industry"/> </h1>
                <p className='text-sm'>With our flexible production capacity and high technology, we produce customized solutions for your needs.</p>
            
                <div className='flex gap-4 mt-6'>
                    <Button>Our Products</Button>
                    <div className="flex items-center gap-2">
                        <Image src={phone} width={25} height={25}/>
                        <div>
                            <span className="block text-xs opacity-60">Sales Department</span>
                            <span className='text-sm'>+0(850) 544 7514</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero