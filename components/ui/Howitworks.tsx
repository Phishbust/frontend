import React from 'react'
import Image from 'next/image'
import how from '@/public/how.png'
const Howitworks = () => {
  return (
    <div className=' text-black flex flex-col lg:flex-row z-20 m-[60px] justify-around gap-20'>
        <Image src={how} className='w-auto h-auto' alt="about"/>
    <div>
    <h1 className='text-[#013956] text-5xl font-bold'>How it works</h1>
    <p className='text-[#013956] text-xl lg:max-w-[40vw]'>
    Our phishing detection tool employs machine learning and the Random Forest algorithm to spot phishing threats. 
    It examines various features such as URLs, email metadata, and content patterns to distinguish between legitimate and phishing attempts.
    The tool then uses a combination of machine learning and statistical analysis to identify potential threats.
    The tool continuously analyzes data in real-time, providing immediate alerts and protection to keep you safe from phishing attacks.
    </p>
    </div>
  </div>
  )
}

export default Howitworks