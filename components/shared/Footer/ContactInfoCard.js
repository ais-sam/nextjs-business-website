import phone from "../../../public/icons/phone.svg"
import message from "../../../public/icons/message.svg"
import location from "../../../public/icons/location.svg"
import Image from "next/image"
const ContactInfoCard = ({type}) => {
    const data = {
      phone: {
        title: "Phone Number",
        info: "+0(850) 544 7514",
        icon: phone,
        width:30,
        height:30
      },
      message: {
        title: "E-Mail Address",
        info: "hello@crosson.com",
        icon: message,
        width:30,
        height:30
      },
      location:{
        title: "Headquarters",
        info: "One Apple Park Way; Cupertino CA 95014, U.S.A",
        icon: location,
        width:36,
        height:36
      }
    };
  return (
    <div className="flex items-start gap-2">
      <Image src={data[type].icon} width={data[type].width} height={data[type].height}/>
      <div>
        <span className="text-[10px] block">{data[type].title}</span>
        <span className="text-sm">{data[type].info}</span>
        {type==="location" && <span className="block underline text-xs font-roboto text-gray-600 cursor-pointer">Get Direction</span>}
      </div>
    </div>
  );
}

export default ContactInfoCard