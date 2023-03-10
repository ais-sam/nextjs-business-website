import Image from "next/image"


const MachineCard = ({name,image}) => {
  return (
    <div>
        <Image src={image} alt={name} className="w-52"/>
        <h6 className="text-sm mt-2 text-center">{name}</h6>
    </div>
  )
}

export default MachineCard