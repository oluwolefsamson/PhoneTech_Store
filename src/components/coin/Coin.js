import React from 'react'
import './coin.css'

const Coin = () => {
  return (
    <div className='coin-container'>
        <div className="coin">
        <div class="side heads">
         <img src='turn.jpg' alt='' />
        </div>
        <div className="side tails">
            <img src='turn.jpg' alt='' />
        </div>
            </div>
    </div>
  )
}

export default Coin