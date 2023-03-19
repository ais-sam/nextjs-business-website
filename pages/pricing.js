
import PricingText from "components/pricing/PricingText";
import PageTitle from "components/shared/PageTitle"
import PackageCard from "components/pricing/PackageCard";
import { packages } from "data/data";


const Pricing = () => {

  return (
    <div className="container">
      <PageTitle title="Pricing" />
      <PricingText/>
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-y-16 mb-4">
        {packages.map(pkg=><PackageCard key={pkg.id} {...pkg}/>)}
      </section>
    </div>
  );
}

export default Pricing