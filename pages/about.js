import AboutText from "components/about/AboutText"
import OurValues from "components/about/OurValues"
import Partners from "components/about/Partners"
import PageTitle from "components/shared/PageTitle"



const About = () => {
  return (
      <div className="container">
        <PageTitle title={"About Us"}/>
        <AboutText/>
        <OurValues/>
        <Partners/>
      </div>
  )
}

export default About