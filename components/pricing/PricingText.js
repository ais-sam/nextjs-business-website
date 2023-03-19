import PageIntro from 'components/shared/PageIntro'

const PricingText = ({className}) => {
  return (
    <section className={className}>
      <PageIntro className="lg:w-[55rem]">
        At the roots of Crosson, there is 20 years of experience in food
        industry that is filled with research, increasing efficiency and
        producing solution for{" "}
        <span className="underline-yellow z-10">
          food, quality, automation and software.
        </span>
      </PageIntro>

      <p className="text-sm opacity-70 leading-6 mb-4">
        Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding
        icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake
        pastry carrot cake jelly danish. Ice cream muffin marshmallow sesame
        snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate
        cookie cupcake marshmallow donut. Cotton candy candy canes cake oat cake
        jelly.
      </p>
    </section>
  );
}

export default PricingText