import ServicesText from "components/services/ServicesText"
import PageTitle from "components/shared/PageTitle"

const Services = () => {
  return (
    <div className="container">
        <PageTitle title="Services"/>
        <ServicesText/>
        {/* <AboutText/>
        <OurValues/>
        <Partners/> */}
    </div>
  )
}

export default Services