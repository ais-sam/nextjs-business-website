import Image from "next/image"
import newsImg from "public/images/product.jpg"
import SectionTitle from "components/shared/SectionTitle";


const NewsDetails = () => {
  return (
    <div>
      <Image src={newsImg} className="mb-4 mt-9 lg:h-[40rem] object-cover" />
      <p className="text-xl mt-8 mb-6 lg:w-[66rem]">
        At the roots of Crosson, there is 20 years of experience in food
        industry that is filled with research, increasing efficiency and
        producing solution for{" "}
        <span className="underline-yellow z-10">
          {" "}
          food, quality, automation and software.
        </span>
      </p>
      <div className="opacity-70">
        <p className="mb-4 text-sm leading-6">
          Donut candy shortbread toffee dragée apple pie brownie. Muffin
          chocolate halvah bonbon gummies cake apple pie. Croissant dessert
          candy canes chocolate bar topping jujubes cupcake toffee dragée.
          Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes.
          Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll
          sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish
          pudding jelly gummies.{" "}
        </p>
        <p className="mb-4 text-sm leading-6">
          Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding
          icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake
          pastry carrot cake jelly danish. Ice ceam muffin marshmallow sesame
          snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate
          cookie cupcake marshmallow donut. Cotton candy candy canes cake oat
          cake jelly.{" "}
        </p>
        <p className="mb-4 text-sm leading-6">
          Muffin chocolate halvah bonbon gummies cake apple pie. Croissant
          dessert candy canes chocolate bar topping jujubes cupcake toffee
          dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake
          jujubes. Fruitcake powder marzipan dessert dessert oat cake candy.
          Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes
          brownie danish pudding jelly gummies.
        </p>
        <p className="mb-4 text-sm leading-6">
          Pudding icing gingerbread sugar plum powder marzipan. Cotton candy
          carrot cake pastry carrot cake jelly danish. Ice cream muffin
          marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon lemon
          drops chocolate cookie cupcake marshmallow donut. Cotton candy candy
          canes cake oat cake jelly.
        </p>
      </div>
    </div>
  );
}

export default NewsDetails