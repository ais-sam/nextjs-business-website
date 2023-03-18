import Button from "components/shared/Button"
const ContactInfo = () => {
  return (
 
        <div className=" lg:basis-96">
          <div className="mb-4">
              <h4 className="text-md mb-2">Contact Informations</h4>
              <p className="opacity-70 text-sm lg:w-48">Get in touch and let us know how we can help</p>
          </div>
          <div>
            
            <div className="mb-3 border">
              <span className="text-xs font-medium opacity-50">PHONE</span>
              <p className="text-sm">+0(850) 544 7514</p>
            </div>
            
            <div className="mb-3">
              <span className="text-xs font-medium opacity-50">MAIL</span>
              <p className="text-sm">hello@crosson.com</p>
            </div>
            
            <div className="mb-3">
              <span className="text-xs font-medium opacity-50">ADDRESS</span>
              <p className="text-sm lg:w-56">One Apple Park Way; Cupertino CA 95014, U.S.A.</p>
            </div>
            
            <div className="flex gap-6 items-center mt-6">
              <Button className="text-sm">Get Direction</Button>
              <span className="underline text-sm cursor-pointer">See on Map</span>
            </div>
          </div>
        </div>
    
  )
}

export default ContactInfo