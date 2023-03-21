import ProductContactCard from "components/products/ProductContactCard"
import ProductInfo from "components/products/ProductInfo"
import ProductsText from "components/products/ProductsText"
import PageTitle from "components/shared/PageTitle"


const Product = () => {
  return (
    <div className="container">
      <PageTitle title="Products Detail" />
      <ProductsText />
      <section className="mt-12 flex flex-col lg:flex-row gap-12 lg:gap-20">
        <ProductInfo/>
        <ProductContactCard/>
      </section>
    </div>
  );
}

export default Product