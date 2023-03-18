import PageTitle from "components/shared/PageTitle"
import ContactText from "components/contact/ContactText"
import Button from "components/shared/Button"
import ContactInfo from "components/contact/ContactInfo"


const Contact = () => {
  return (
    <div className="container">
      <PageTitle title="Contact Us"/>
      <ContactText/>
      <section className="mt-12 flex flex-col lg:flex-row gap-10 lg:gap-3 mb-9">
        {/* Contact info */}
        <ContactInfo/>
        {/* Contact form */}
        <div className="border flex-1">
            <div className="mb-10">
                <h4 className="text-md mb-2">Contact Form</h4>
                <p className="opacity-70 text-[13px]">Get in touch and let us know how we can help</p>
            </div>
            {/* Inputs */}
            <form>
              <div className="grid lg:grid-cols-2 gap-x-2 gap-y-3">
                <input type="text" className="p-[6px] pl-4 placeholder:text-[13px] outline-none" placeholder="Name Surname"/>
                <input type="email" className="p-[6px] pl-4 placeholder:text-[13px] outline-none" placeholder="E-Mail Adress"/>
                <input type="tel" className="p-[6px] pl-4 placeholder:text-[13px] outline-none" placeholder="Phone Number"/>
                <input type="text" className="p-[6px] pl-4 placeholder:text-[13px] outline-none" placeholder="Your Company"/>
              </div>
              <textarea className="w-full mt-3 placeholder:text-[13px] p-[6px] pl-4 h-20 resize-none outline-none" placeholder="Your Message"/>
                <div className="mt-6 flex justify-end">
                  <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Contact