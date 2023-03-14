
import step2 from "public/images/step2.jpg"
import step3 from "public/images/step3.jpg"
import arrow from "public/icons/arrow.svg"
import Image from "next/image"

const ValueCard = ({type}) => {
    if (type="mission") {
        const data = {
          title: "Our Mission",
          description: "Center we have developped many patents in filling and packaging technology.",
          image:step2
        };
    }else if(type="vision"){
        const data = {
          title: "Our Vision",
          description: "Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears. ",
          image:step3
        };
    }


  return (
    <div>
      <Image src={data.image} className=" w-64" />
      <div className="mt-4">
        <h6 className="text-base">{data.title}</h6>
        <p className="text-[13px] mb-58 opacity-70 w-52">
          {data.description}
        </p>
        <span className="flex items-center text-[13px] gap-4 mt-4">
          Read More
          <Image src={arrow} width={5} />
        </span>
      </div>
    </div>
  );
}

export default ValueCard