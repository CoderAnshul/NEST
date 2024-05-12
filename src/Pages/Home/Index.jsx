import React from 'react'
import Homeslider from './Slider/Homeslider'
import Catslider from '../../component/categary slider/Catslider'
import Banner from '../../component/Banner/Banner'

const Home = () => {
  return (
    <>
      <Homeslider/>
      <Catslider/>
      <Banner/>
    </>
  )
}

export default Home