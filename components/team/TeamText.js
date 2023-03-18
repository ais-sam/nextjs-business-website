import PageIntro from 'components/shared/PageIntro'


const TeamText = ({className}) => {
  return (
    <section className={className}>
      <PageIntro className="lg:w-[55rem]">
        At the roots of Crosson, there is 20 years of experience in food
        industry that is filled with research, increasing efficiency and
        producing solution for  <span className="underline-yellow z-10">food, quality, automation and software.</span>
      </PageIntro>
      <div>
        <p className="text-sm opacity-70 leading-6 mb-4">
          Donut candy shortbread toffee dragée apple pie brownie. Muffin
          chocolate halvah bonbon gummies cake apple pie. Croissant dessert
          candy canes chocolate bar topping jujubes cupcake toffee dragée.
          Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes.
          Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll
          sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish
          pudding jelly gummies.
        </p>
      </div>
    </section>
  );
}

export default TeamText