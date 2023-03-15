import CustomerCircle from "components/about/CustomerCircle"
import SectionMiniTitle from "components/shared/SectionMiniTitle"
import SectionTitle from "components/shared/SectionTitle"
import Underline from "components/shared/Underline"

const Partners = () => {
  return (
    <section className="my-20">
        <div className="flex flex-col lg:flex-row ">
            <div className="flex-1">
            <SectionMiniTitle>partners</SectionMiniTitle>
            <SectionTitle className=" lg:w-[26rem] mb-6">Ask our <Underline text="happy customers"/> about our quality </SectionTitle>
            </div>

            <div className=" flex-1">
                <p className="text-sm opacity-70 leading-6 lg:w-4/5 mt-5">
                To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.
                </p>
                <span className=" capitalize text-sm mt-2 block">Erkan Giris, EG Theme</span>
            </div>
        </div>
        <div className="flex justify-center gap-2 flex-wrap my-8">
            {Array.from({length:21},(_,i)=>i+1).map(el=><CustomerCircle/>)}
            <CustomerCircle type="cta"/>
        </div>

  </section>
  )
}

export default Partners