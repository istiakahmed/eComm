import React from 'react'
import './Home.css'
import Banner from '../../Components/Banner/Banner'
import Men from '../../Components/Men/Men'
import ProductCart from '../../Components/Products/Productcart'
import Ladies from '../../Components/Ladies/Ladies'

const Home = () => {
  return (
    <>
    {/* =============== Components ================ */}
    <Banner />
    <ProductCart />
    <Ladies />
    
    </>
  )
}

export default Home
