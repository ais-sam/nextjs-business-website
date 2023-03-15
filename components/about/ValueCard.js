
import step2 from "public/images/step2.jpg"
import step3 from "public/images/step3.jpg"
import arrow from "public/icons/arrow.svg"
import Image from "next/image"
import ReadMore from "components/shared/ReadMore"

const ValueCard = ({type}) => {
  const data= {
    title:"",
    description:"",
    image: null
  }
    if (type=="mission") {
          data.title= "Our Mission",
          data.description= "Center we have developped many patents in filling and packaging technology.",
          data.image=step2
       
    }else if(type=="vision"){
          data.title= "Our Vision",
          data.description= "Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears. ",
          data.image=step3
       
    }


  return (
    <div>
      <Image src={data.image} className="w-full lg:w-64" />
      <div className="mt-4">
        <h6 className="text-base">{data.title}</h6>
        <p className="text-[13px] mb-58 opacity-70 w-52">
          {data.description}
        </p>
        <ReadMore/>
      </div>
    </div>
  );
}

export default ValueCard