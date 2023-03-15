import ExploreServices from "components/services/ExploreServices"
import ServicesText from "components/services/ServicesText"
import PageTitle from "components/shared/PageTitle"

const Services = () => {
  return (
    <div className="container">
        <PageTitle title="Services"/>
        <ServicesText/>
        <ExploreServices/>
        {/* <AboutText/>
        <OurValues/>
        <Partners/> */}
    </div>
  )
}

export default Services