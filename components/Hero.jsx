import React from 'react';
// import im from '../public/images/HFest23_Logo.png' ;
import Image from 'next/image'

const Hero=()=>{
    return (
        <div>
            <div>
        <Image
          width={300}
          height={120}
          src="/images/HFest23_Logo.png"
          alt="Logo"
        />
      </div>
      <div>
        <h1>Welcome to COSC Hacktoberfest Hackathon'23</h1>
        <h5>The Biggest Technical Fest of CBIT<br />7th and 8th October,2023</h5>
        <a href="https://www.instagram.com/">Register!</a>
      </div>
        </div>
    )
}

export default Hero