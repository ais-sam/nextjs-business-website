import ProductCard from "components/products/ProductCard"
import ProductsText from "components/products/ProductsText"
import PageTitle from "components/shared/PageTitle"
import {products} from "data/data"
import { useState } from "react"

const ProductList = () => {
  const [productList,setProducts] = useState(products)

  return (
    <div className="container">
        <PageTitle title="Products"/>
        <ProductsText/>
        <section className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 mb-12">
          {productList.map((product)=><ProductCard key={product.id} {...product}/>)}
        </section>
    </div>
  )
}

export default ProductList