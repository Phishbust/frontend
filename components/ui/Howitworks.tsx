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
    It examines various features such as dns data,url data,ip data and content patterns to distinguish between legitimate and phishing attempts.
    The tool then uses a combination of machine learning and statistical analysis to identify potential threats.
    By analyzing the data, we can identify patterns and trends that indicate potential phishing attempts.
    We can then use this information to improve our detection system and prevent phishing attacks.
    By leveraging our expertise and machine learning algorithms, we can provide accurate and reliable phishing detection solutions.
    We believe that phishing detection is critical to protecting individuals and organizations from cybersecurity threats.
    </p>
    </div>
  </div>
  )
}

export default Howitworks