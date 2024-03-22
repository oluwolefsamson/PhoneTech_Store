import React from 'react'
import './Map.css'


const Map = () => {
  return (
    <section className=" flex justify-center items-center h-full mt-4 mb-4">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.78244294513!2d7.367465157320999!3d9.024416368195467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1711094646094!5m2!1sen!2sng"
      className="map w-full sm:w-96 md:w-3/4 lg:w-3/2 xl:w-1/3 2xl:w-20 h-64 m-2"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    />
    </section>
  )
}

export default Map