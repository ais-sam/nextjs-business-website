import PageIntro from 'components/shared/PageIntro'


const ProductsText = ({className}) => {
  return (
    <section className={className}>
      <PageIntro className="lg:w-[53rem]">
        Since our machines are produced in compliance with the difficult
        conditions that can be operated 24/7, the{" "}
        <span className="underline-yellow z-10">
          possibility of malfunction are very low.
        </span>
      </PageIntro>

      <p className="text-sm opacity-70 leading-6 mb-4">
        Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate
        halvah bonbon gummies cake apple pie. Croissant dessert candy canes
        chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish
        tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder
        marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi
        bears tootsie roll dragée. Candy canes brownie danish pudding jelly
        gummies.
      </p>
    </section>
  );
}

export default ProductsText