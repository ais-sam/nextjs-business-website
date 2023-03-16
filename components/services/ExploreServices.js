import ServiceCard from "components/services/ServiceCard"
import SectionMiniTitle from "components/shared/SectionMiniTitle"
import SectionTitle from "components/shared/SectionTitle"
import Underline from "components/shared/Underline"
import { services } from "data/data"

const ExploreServices = () => {
  return (
    <section className="my-20 ">

        <div>
          <SectionMiniTitle>explore services</SectionMiniTitle>
          <SectionTitle className=" lg:w-[46rem] mb-6">We offer high quality machine manufacturing and <Underline text="software services"/> </SectionTitle>
          <p className="text-sm opacity-70 leading-6 lg:w-[49rem]">
          To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.
          </p>
        </div>
        <div className="my-8 grid  min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {services.map(service=><ServiceCard key={service.id} service={service} className="max-[500px]:text-ceter "/>)}
        </div>
      </section>
  )
}

export default ExploreServices