import React from 'react'
import Banner1 from '../../../src/assets/images/banner1.jpg'
import Banner2 from '../../../src/assets/images/banner2.jpg'
import Banner3 from '../../../src/assets/images/banner3.jpg'
import './Banner.css'

const Banner = () => {
  return (
    <div className='bannerSection'>
        <div className='w-full h-auto px-11 py-3 flex gap-2 justify-between'>
            <div className="box">
                <img src={Banner1} alt="banner" />
            </div>
            <div className="box">
               <img src={Banner2} alt="banner" />
            </div>
            <div className="box">
               <img src={Banner3} alt="banner" />
            </div>
        </div>
    </div>
  )
}

export default Banner