import WhoWeAre from "components/home/WhoWeAre"
import Hero from "components/home/Hero"
import WhatWeDo from "components/home/whatWeDo"
import HowWeDo from "components/home/howWeDo"
import CompanyNews from "components/home/news"
import Header from "components/shared/Header"
import Footer from "components/shared/Footer"

export default function Home() {
  return (
    <div>
      <Hero/>
      <WhoWeAre/>
      <WhatWeDo/>
      <HowWeDo/>
      <CompanyNews/>
    </div>
  )
}


Home.getLayout = function PageLayout(page) {
  return (
    <>
      <Header/>
      {page}
      <Footer/>
    </>
  )
}