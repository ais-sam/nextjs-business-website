import AboutText from "components/about/AboutText"
import OurValues from "components/about/OurValues"
import Partners from "components/about/Partners"
import PageTitle from "components/shared/PageTitle"



const About = () => {
  return (
    <div className="bg-[#F1F1F1] py-14 about">
      <div className="container">
        <PageTitle title={"About Us"}/>
        <AboutText/>
        <OurValues/>
        <Partners/>
      </div>
    </div>
  )
}

export default About