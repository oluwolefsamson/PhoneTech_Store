import React from 'react'
import './Feature.css'
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

const Feature = () => {
  return (
    <section className='f-container'>
      <div className='first-column'>
        <h2>Discover the Best Deals on Phones at Our Online Store</h2>
        <span className='first-span'>Get access to the free shipping, 24/7 customer support, 
          and exclusive member discounts.
        </span>

        <div className='text'>
          <div className='text-con'>
            <span>Free Shipping<MdOutlineLocalShipping  size={40} color='rgb(18, 63, 18)'/></span>
            <span>Enjoy the convenience of having your 
              new phone delivered to your doorstep for free.
            </span>
          </div>

          <div className='text-con'>
            <span>24/7 Support<MdSupportAgent className='support-icon' size={40} color='rgb(18, 63, 18)'/></span>
            <span>Our dedicated support team is available round
              the clock to assist you.
            </span>
          </div>
        </div>
      </div>

      <div className='second-column'>
        <img src='feature-img.jpg' alt='featureimg' />
      </div>
    </section>
  )
}

export default Feature