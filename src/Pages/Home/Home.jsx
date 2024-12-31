import React from 'react'
import './Home.css'
import Banner from '../../Components/Banner/Banner'
import Men from '../../Components/Men/Men'
import ProductCart from '../../Components/Products/Productcart'
import Ladies from '../../Components/Ladies/Ladies'
import Subscribe from '../../Components/Subscribe/Subscribe'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    {/* =============== Components ================ */}
    <Banner />
    <ProductCart />
    <Ladies />
    <Subscribe />
    <Footer />
    
    </>
  )
}

export default Home
