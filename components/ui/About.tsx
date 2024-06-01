import React from 'react';
import Image from "next/image";
import how from '@/public/how.png';
const About = () => {
  return (
    <div className=' text-black flex flex-col-reverse lg:flex-row z-20 m-[60px] justify-around gap-20'>
      <div>
      <h1 className='text-[#013956] text-5xl font-bold'>About us</h1>
      <p className='text-[#013956] text-xl md:max-w-[40vw]'>
      Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection Machine learning based phishing detection
      </p>
      </div>
      <Image src={how} alt="about"/>
    </div>
  )
}

export default About