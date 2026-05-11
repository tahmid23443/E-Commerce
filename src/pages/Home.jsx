import React from 'react'
import Banner from '../components/Home/Banner'
import Catagory from '../components/Catagory'
import SmartPhones from '../components/Home/SmartPhones'
import FeatureProduct from '../components/Home/FeatureProduct'
import ShowMore from '../ui/ShowMore'
import Payment from '../components/Home/Payment'
import Footer from '../Layout/Footer'







const Home = () => {
  return (
    <div>
      <Banner/>
      <Catagory/> 
      <SmartPhones/>
      <FeatureProduct/>
      <ShowMore/>
      <Payment/>
    
    
     
    
    
    </div>
  )
}

export default Home
