import Button from "components/shared/Button"


const ContactForm = () => {

    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className="border flex-1">
      <div className="mb-10">
        <h4 className="text-md mb-2">Contact Form</h4>
        <p className="opacity-70 text-[13px]">
          Get in touch and let us know how we can help
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-x-2 gap-y-3">
          <input
            type="text"
            className="p-[6px] pl-4 placeholder:text-[13px] outline-none"
            placeholder="Name Surname"
          />
          <input
            type="email"
            className="p-[6px] pl-4 placeholder:text-[13px] outline-none"
            placeholder="E-Mail Adress"
          />
          <input
            type="tel"
            className="p-[6px] pl-4 placeholder:text-[13px] outline-none"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="p-[6px] pl-4 placeholder:text-[13px] outline-none"
            placeholder="Your Company"
          />
        </div>
        <textarea
          className="w-full mt-3 placeholder:text-[13px] p-[6px] pl-4 h-20 resize-none outline-none"
          placeholder="Your Message"
        />
        <div className="mt-6 flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm