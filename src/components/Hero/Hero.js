import React from 'react'
import './Hero.css'
import Coin from '../coin/Coin'
import LazyLoad from 'react-lazyload'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='first'>
            <div className='first-con'>
                <h2><span>Discover</span> the latest smartphones at unbeatable prices</h2>
                <div className='buttons'>
                        <button>Shop</button>
                        <button>Learn More</button>
                </div> 
            </div>
            <div>
             < Coin />
            </div>
            
                
            
        </div>
       <div className='second'>
        <LazyLoad height={200} offset={100}>
              <img src='hero.jpg' alt='' fill/>
          </ LazyLoad>
        </div>
    </section>
  )
}

export default Hero