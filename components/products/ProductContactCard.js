import phone from "public/icons/phone.svg"
import message from "public/icons/message.svg"
import calendar from "public/icons/calendar.svg"
import Image from "next/image"

const ProductContactCard = () => {
  return (
    <div className="lg:basis-72">
          {/* Contact info */}
          <div className="">
            <p>
              Are you interested? Contact our <br /> sales department now
            </p>
            <div className="flex items-start gap-2 mt-3">
              <Image src={phone} width={22} height={22} />
              <div>
                <span className="block text-xs">
                  <span className="font-bold">Erkan giris </span> / Sales
                  Manager
                </span>
                <span className="text-sm">+0(850) 544 7514</span>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-3">
              <Image src={message} width={22} height={22} />
              <div>
                <span className="block text-xs">Sales Department</span>
                <span className="text-sm">sales@crosson.com</span>
              </div>
            </div>
          </div>

          {/* calendar */}
          <div className="mt-12 flex items-center gap-6 py-6 px-5 bg-[#FAFAFA] border border-[#DFDFDF] border-b-[#DBBD02] border-b-4">
            <div>
              <p>
                Let's Plan an <br />
                Online Meeting
              </p>
              <div>
                <span className="text-xs opacity-60 mr-2">
                  We are Available Now
                </span>
                <span className="w-2 h-2 rounded-full bg-[#28CBA4] inline-block"></span>
              </div>
            </div>
            <Image src={calendar} width={48} height={48} />
          </div>
        </div>
  )
}

export default ProductContactCard