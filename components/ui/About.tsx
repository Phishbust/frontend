import React from 'react'
import Image from "next/image";
const About = () => {
  return (
    <div className=' text-black flex flex-row z-20 m-[60px] justify-around gap-20'>
      <div>
      <h1 className='text-[#013956] text-5xl font-bold'>About us</h1>
      <p className='text-[#013956] text-xl w-[550px]'>
      Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection
      </p>
      </div>
        <Image src="/Phish.png" alt="about" width={500} height={500}/>
      

    </div>
  )
}

export default About