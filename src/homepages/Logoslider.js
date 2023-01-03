import React from 'react'
import Marquee from "react-fast-marquee";

function Logoslider() {
  return (
    <>
      <div className='marquee-container'>
        <Marquee>
          <div>
            <img src='images/logo_1-1.png' className='logo-img' />
            <img src='images/logo_2.png' className='logo-img' />
            <img src='images/logo_3.png' className='logo-img' />
            <img src='images/logo_4.png' className='logo-img' />
            <img src='images/logo_5.png' className='logo-img' />
            <img src='images/logo_6.png' className='logo-img' />

          </div>

        </Marquee>

      </div>


    </>
  )
}

export default Logoslider