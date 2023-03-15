import PageIntro from "components/shared/PageIntro";

const AboutText = ({className}) => {
  return (
    <div className={className}>
      <PageIntro>
        At the roots of Crosson, there is 20 years of experience in food
        industry that is filled with research, increasing efficiency and
        producing solution for{" "}
        <span className="underline-yellow z-10">
          food, quality, automation and software.
        </span>
      </PageIntro>

      <div>
        <p className="text-sm opacity-70 leading-6 mb-4">
          Donut candy shortbread toffee dragée apple pie brownie. Muffin
          chocolate halvah bonbon gummies cake apple pie. Croissant dessert
          candy canes chocolate bar topping jujubes cupcake toffee dragée.
          Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes.
          Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll
          sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish
          pudding jelly gummies.{" "}
        </p>
        <p className="text-sm opacity-70 leading-6">
          Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding
          icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake
          pastry carrot cake jelly danish. Ice cream muffin marshmallow sesame
          snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate
          cookie cupcake marshmallow donut. Cotton candy candy canes cake oat
          cake jelly.
        </p>
      </div>
    </div>
  );
}

export default AboutText