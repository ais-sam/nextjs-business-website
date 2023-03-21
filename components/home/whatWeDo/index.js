import Image from 'next/image'
import SectionMiniTitle from 'components/shared/SectionMiniTitle'
import SectionTitle from 'components/shared/SectionTitle'
import Underline from 'components/shared/Underline'
import Card from 'components/home/whatWeDo/Card'
import watch from "public/icons/watch.svg"
import {homeServices, machines} from "data/data"
import MachineCard from 'components/home/whatWeDo/MachineCard'
import calendar from "public/icons/calendar.svg"
import phone from "public/icons/phone.svg"
import message from "public/icons/message.svg"


const WhatWeDo = () => {
  return (
    <section className='whatwedo pt-8 pb-0'>
        <div className='container'>
            {/* top */}
            <div className='flex flex-col lg:flex-row items-start gap-8  lg:mb-12'>
                {/* left */}
                <div className='lg:basis-[48rem]'>
                    <SectionMiniTitle>what we do</SectionMiniTitle>
                    <SectionTitle>With our flexible production capacity and high technology, we <Underline text="produce customized"/> solutions for your needs</SectionTitle>
                </div>
                {/* right */}
                <div className='flex flex-col gap-7 lg:basis-80 lg:mt-10'>
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
            <div className='flex items-center gap-8 flex-wrap mt-10 lg:mt-0'>
               {homeServices.map(service=><Card key={service.id} icon={service.icon} title={service.title}/>)}
            </div>
        </div>
        {/* bottom */}
        <div className='wwd-shadow bg-white'>
            <div className='flex flex-col lg:flex-row gap-4 container py-12'>
                {/* Left */}
                <div className='lg:basis-[52rem]'>  
                    <h3 className='text-2xl mb-3'>Filling and Packaging Machines</h3>
                    <p className='text-sm opacity-70 '>Liquorice lemon drops powder chocolate liquorice candy dessert gummi bears. Caramels marzipan <br className='hidden lg:block'/> donut jujubes sweet roll. Powder  croissant toffee shortbread chocolate sweet pie. </p>
                    <div className='flex flex-wrap lg:items-center gap-4 mt-7'>
                        {machines.map((machine)=><MachineCard key={machine.id} {...machine}/>)}
                    </div>
                </div>
                {/* Right */}
                <div className='lg:basis-72'>
                    {/* Calnedar */}
                    <div className='flex items-center gap-6 py-6 px-5 bg-[#FAFAFA] border border-[#DFDFDF] border-b-[#DBBD02] border-b-4'>
                        <div>
                            <p>Let's Plan an <br/>Online Meeting</p>
                            <div>
                                <span className='text-xs opacity-60 mr-2'>We are Available Now</span>
                                <span className='w-2 h-2 rounded-full bg-[#28CBA4] inline-block'></span>
                            </div>
                        </div>
                        <Image src={calendar} width={48} height={48}/>
                    </div>
                    {/* Contact info */}
                    <div className='mt-5'>
                        <p>Are you interested? Contact  our <br/> sales department now</p>
                        <div className='flex items-start gap-2 mt-3'>
                            <Image src={phone} width={22} height={22}/>
                            <div >
                                <span className='block text-xs'><span className='font-bold'>Erkan giris </span> / Sales Manager</span>
                                <span className='text-sm'>+0(850) 544 7514</span>
                            </div>
                        </div>
                        <div className='flex items-start gap-2 mt-3'>
                            <Image src={message} width={22} height={22}/>
                            <div >
                                <span className='block text-xs'>Sales Department</span>
                                <span className='text-sm'>sales@crosson.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhatWeDo