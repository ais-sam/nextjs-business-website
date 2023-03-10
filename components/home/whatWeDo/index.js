import Image from 'next/image'
import SectionMiniTitle from 'components/shared/SectionMiniTitle'
import SectionTitle from 'components/shared/SectionTitle'
import Underline from 'components/shared/Underline'
import Card from 'components/home/whatWeDo/Card'
import watch from "public/icons/watch.svg"
import {services, machines} from "data/data"
import MachineCard from 'components/home/whatWeDo/MachineCard'


const WhatWeDo = () => {
  return (
    <div className='whatwedo py-8'>
        <div className='container'>
            {/* top */}
            <div className='flex flex-col lg:flex-row items-start gap-8  lg:mb-12'>
                {/* left */}
                <div className='lg:basis-[48rem]'>
                    <SectionMiniTitle>what we do</SectionMiniTitle>
                    <SectionTitle>With our flexible production capacity and high technology, we <Underline text="produce customized"/> solutions for your needs</SectionTitle>
                </div>
                {/* right */}
                <div className='flex flex-col gap-7 basis-80 lg:mt-10'>
                    <div className='flex items-center gap-3'>
                        <Image src={watch} width={38} height={38}/>
                        <div>
                            <h5 className='text-2xl '>Watch Our Machines</h5>
                            <p className='text-xs text-[#818181]'>2.34Min, 14.7MB</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* center */}
            <div className='flex items-center gap-8 flex-wrap'>
               {services.map(service=><Card key={service.id} icon={service.icon} title={service.title}/>)}
            </div>
            {/* bottom */}
            <div className='mt-12 flex flex-col lg:flex-row'>
                {/* Left */}
                <div>  
                    <h3 className='text-2xl mb-3'>Filling and Packaging Machines</h3>
                    <p className='text-sm opacity-70'>Liquorice lemon drops powder chocolate liquorice candy dessert gummi bears. Caramels marzipan donut jujubes sweet roll. Powder croissant toffee shortbread chocolate sweet pie. </p>
                    <div className='flex flex-wrap lg:items-center gap-4 mt-4'>
                        {machines.map((machine)=><MachineCard key={machine.id} {...machine}/>)}
                    </div>
                </div>
                {/* Right */}
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo