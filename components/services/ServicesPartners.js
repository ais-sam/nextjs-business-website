import PartnerCard from "components/services/PartnerCard"
import SectionMiniTitle from "components/shared/SectionMiniTitle"
import SectionTitle from "components/shared/SectionTitle"
import Underline from "components/shared/Underline"
import { partners } from "data/data"


const ServicesPartners = () => {
  return (
    <div className="my-3">
        <SectionMiniTitle>partners</SectionMiniTitle>
        <SectionTitle className="lg:w-[45rem]">Crosson, Trusted by over <Underline text="1,000 businesses"/>  of all sizes</SectionTitle>
        <p className="text-sm opacity-70 leading-6 lg:w-[49rem] mb-6">
        To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partners.map(partner=><PartnerCard key={partner.id} {...partner}/>)}
        </div>
    </div>
  )
}

export default ServicesPartners