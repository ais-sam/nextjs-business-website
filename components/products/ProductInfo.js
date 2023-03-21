import Image from "next/image"
import product from "public/images/product.jpg"
import download from "public/icons/download.svg"
import checkmark from "public/icons/checkmark.svg"



const ProductInfo = () => {
  return (
    <div className="lg:basis-[49rem]">
          <Image src={product} />
          {/* Menu */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mt-7 text-sm">
            <ul className="flex">
                <li className="p-2 lg:p-3 px-4 lg:px-5 cursor-pointer bg-w-yellow">Product Overview</li>
                <li className="p-2 lg:p-3 px-4 lg:px-5 cursor-pointer text-[#777777]">Technical Data</li>
                <li className="p-2 lg:p-3 px-4 lg:px-5 cursor-pointer text-[#777777]">Applications</li>
                <li className="p-2 lg:p-3 px-4 lg:px-5 cursor-pointer text-[#777777]">Gallery</li>
            </ul>
            <div className="flex items-center gap-2 ml-auto">
                Download PDF
                <Image src={download}/>
            </div>
          </div>

          {/* Details */}
          <div className="mt-6">
            <h3 className="text-xl mb-5">Filling & Packaging Machines</h3>
            <div className="text-sm text-[#777777] leading-6">
                <p>Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. </p>
                <p className="mt-4">Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies. </p>
                <ul className="mt-4 ">
                    <li className="flex items-center gap-2"><Image src={checkmark}/>Danish lemon drops sweet soufflé jelly-o wafer gingerbread muffin.</li>
                    <li className="flex items-center gap-2"><Image src={checkmark}/>Marshmallow caramels chocolate jelly-o sweet roll jelly beans cake sweet. </li>
                    <li className="flex items-center gap-2"><Image src={checkmark}/>Donut pastry apple pie ice cream dragée cheesecake. </li>
                </ul>
            </div>
          </div>
    </div>
  )
}

export default ProductInfo