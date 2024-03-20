import React, {useEffect} from 'react';
import './GetStarted.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const GetStarted = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
}, [])

  return (

    <div data-aos="fade-up"
    data-aos-duration="3000"> 

    <section className='g-wrapper'>
     <div className="g-container">
        <div className="inner-container">
            <span className='first'>Get Started With PhoneTech</span>
            <span className='second'>Kindly signup to see the latest products direct from 
            the company.</span>
            <button className='button2'>
                <a href="mailto:oluwolefsamson44@gmail.com">Get Started</a>
            </button>
        </div>
     </div>
    </section>

    </div>
  )
}

export default GetStarted