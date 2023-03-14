import SectionTitle from "components/shared/SectionTitle"
import arrow from "public/icons/arrow.svg"
import Image from "next/image"
import Link from "next/link"
import PageIntro from "components/shared/PageIntro"
import SectionMiniTitle from "components/shared/SectionMiniTitle"
import Underline from "components/shared/Underline"
import ValueCard from "components/about/ValueCard"




const About = () => {
  return (
    <div className="container">
      <div>
        <SectionTitle>About Us</SectionTitle>
        {/* BreadCrumb */}
        <div className="flex gap-2 items-center text-xs">
          <Link href="/">Home</Link>
          <Image src={arrow} width={6} className=" translate-y-[1px]"/>
          <Link href="/">Corporate</Link>
          <Image src={arrow} width={6} className=" translate-y-[1px]"/>
          <Link href="/">About Crosson</Link>
        </div>
      </div>

    <div>
        <PageIntro>
          At the roots of Crosson, there is 20 years of experience in food industry that is filled with research,
          increasing efficiency and producing solution for <span className="question">food, quality, automation and software.</span>
        </PageIntro>
        {/* text */}
        <div>
          <p className="text-sm opacity-70 leading-6 mb-4">Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies. </p>
          <p className="text-sm opacity-70 leading-6">Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake pastry carrot cake jelly danish. Ice cream muffin marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate cookie cupcake marshmallow donut. Cotton candy candy canes cake oat cake jelly.</p>
        </div>
    </div>


      {/* OUR VALUES SECTION */}
      <section className="my-20 flex flex-col lg:flex-row ">
        {/* Left */}
        <div className="flex-1">
          <SectionMiniTitle>our values</SectionMiniTitle>
          <SectionTitle className=" lg:w-[25rem] mb-6">Crosson has adopted Quality Production as its <Underline text="basic principle."/> </SectionTitle>
          <p className="text-sm opacity-70 leading-6 w-[26rem]">
          To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.
          </p>
          <span className="underline text-sm mt-5 block">Quality Certificates</span>
        </div>
        {/* Right */}
        <div className="flex flex-col md:flex-row gap-4 flex-1">
          <ValueCard type="mission"/>
          <ValueCard type="vison"/>
        </div>
      </section>
    </div>
  )
}

export default About