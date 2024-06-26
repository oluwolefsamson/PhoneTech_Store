import React from 'react'
import './Hero.css'



const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='first'>
            <div 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"       
            className='first-con'>
                <h2><span>Discover</span> the latest smartphones at unbeatable prices</h2>
                <div className='buttons'>
                        <button>Shop</button>
                        <button>Learn More</button>
                </div> 
            </div>
            <div 
            className='hero-img1'>
             <img src='hero-img1.jpg' alt='hero-img' loading='lazy'/>
            </div>
            
                
            
        </div>
    </section>
  )
}

export default Hero