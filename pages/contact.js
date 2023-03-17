import PageTitle from "components/shared/PageTitle"
import ContactText from "components/contact/ContactText"
import Button from "components/shared/Button"


const Contact = () => {
  return (
    <div className="container">
      <PageTitle title="Contact Us"/>
      <ContactText/>
      <section className="mt-12 flex flex-col lg:flex-row gap-10 lg:gap-3 mb-9">
        {/* Contact info */}
        <div className=" lg:basis-96">
          <div className="mb-4">
              <h4 className="text-md mb-2">Contact Informations</h4>
              <p className="opacity-70 text-[13px] lg:w-48">Get in touch and let us know how we can help</p>
          </div>
          <div>
            {/* phone */}
            <div className="mb-3 border">
              <span className="text-[11px] font-medium opacity-50">PHONE</span>
              <p className="text-[13px]">+0(850) 544 7514</p>
            </div>
            {/* mail */}
            <div className="mb-3">
              <span className="text-[11px] font-medium opacity-50">MAIL</span>
              <p className="text-[13px]">hello@crosson.com</p>
            </div>
            {/* adress */}
            <div className="mb-3">
              <span className="text-[11px] font-medium opacity-50">ADDRESS</span>
              <p className="text-[13px] lg:w-56">One Apple Park Way; Cupertino CA 95014, U.S.A.</p>
            </div>
            {/* Button */}
            <div className="flex gap-6 items-center mt-6">
              <Button className="text-[13px]">Get Direction</Button>
              <span className="underline text-[13px] cursor-pointer">See on Map</span>
            </div>
          </div>
        </div>
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