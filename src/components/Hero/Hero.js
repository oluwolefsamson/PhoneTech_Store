import React from 'react'
import './Hero.css'
import Coin from '../coin/Coin'


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
              <img src='hero.jpg' alt='' fill/>
        </div>
    </section>
  )
}

export default Hero