import PageTitle from "components/shared/PageTitle"
import ContactText from "components/contact/ContactText"
import ContactInfo from "components/contact/ContactInfo"
import ContactForm from "components/contact/ContactForm"


const Contact = () => {
  return (
    <div className="container">
      <PageTitle title="Contact Us"/>
      <ContactText/>
      <section className="mt-12 flex flex-col lg:flex-row gap-10 lg:gap-3 mb-9">
        <ContactInfo/>
        <ContactForm/>
      </section>
    </div>
  )
}

export default Contact