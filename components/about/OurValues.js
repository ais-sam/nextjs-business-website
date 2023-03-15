import SectionTitle from "components/shared/SectionTitle"
import SectionMiniTitle from "components/shared/SectionMiniTitle"
import Underline from "components/shared/Underline"
import ValueCard from "components/about/ValueCard"

const OurValues = () => {
  return (
    <section className="my-20 flex flex-col lg:flex-row gap-10 lg:gap-0">
        {/* Left */}
        <div className="flex-1">
          <SectionMiniTitle>our values</SectionMiniTitle>
          <SectionTitle className=" lg:w-[25rem] mb-6">Crosson has adopted Quality Production as its <Underline text="basic principle."/> </SectionTitle>
          <p className="text-sm opacity-70 leading-6 lg:w-[26rem]">
          To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.
          </p>
          <span className="underline text-sm mt-5 block">Quality Certificates</span>
        </div>
        {/* Right */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <ValueCard type="mission"/>
          <ValueCard type="vision"/>
        </div>
      </section>
  )
}

export default OurValues
