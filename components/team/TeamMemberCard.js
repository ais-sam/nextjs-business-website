import Image from "next/image"
import instagram from "public/icons/Instagram.svg"
import linkedin from "public/icons/Linkedin.svg"
import twitter from "public/icons/Twitter.svg"


const TeamMemberCard = ({role,name,picture}) => {
  return (
    <div>
        <div className="member-card relative">
            <Image src={picture}/>
            <div className="member-info  w-full bg-[#fcda00a4] py-3 ">
                <div className="flex items-center gap-4 mb-4 justify-center">
                    <Image src={instagram} width={16}/>
                    <Image src={linkedin} width={16}/>
                    <Image src={twitter} width={16}/>
                </div>
                <p className="text-center text-xs opacity-80">{role}</p>
            </div>
        </div>
        <p className="text-center mt-2">{name}</p>
    </div>
  )
}

export default TeamMemberCard