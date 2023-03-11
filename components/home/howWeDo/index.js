import SectionTitle from "components/shared/SectionTitle"
import SectionMiniTitle from "components/shared/SectionMiniTitle"
import Underline from "components/shared/Underline"
import ServiceCard from "components/home/howWeDo/ServiceCard"

const HowWeDo = () => {
  return (
    <div className="container">
        <SectionMiniTitle>how we do</SectionMiniTitle>
        <SectionTitle>A journey from <Underline text="design to product."/></SectionTitle>
        <p className="mb-3">Starting from the planning of the product our customer wants; design, manufacturing,<br className="hidden lg:block"/> software, mounting, installation & commissioning are made by us.</p>
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
        </div>
    </div>
  )
}

export default HowWeDo