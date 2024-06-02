import React from 'react';
import Image from "next/image";
import how from '@/public/how.png';
const About = () => {
  return (
    <div className=' text-black flex flex-col-reverse lg:flex-row z-20 m-[60px] justify-around gap-20'>
      <div>
      <h1 className='text-[#013956] text-5xl font-bold'>About us</h1>
      <p className='text-[#013956] text-xl md:max-w-[40vw]'>
      We are a passionate team of students from Fırat University,
      specializing in the dynamic fields of Artificial Intelligence and Data Engineering.
      Our collective expertise spans various aspects of data science,
      driven by a shared enthusiasm for uncovering insights and solving complex problems through data-driven methodologies.
      Our latest project exemplifies our commitment to innovation and excellence in AI and data engineering, 
      as we strive to push the boundaries of what is possible with cutting-edge technologies. 
      Together, we aim to make meaningful contributions to the field and prepare ourselves for impactful careers in the tech industry.
      
      </p>
      </div>
      <Image src={how} alt="about"/>
    </div>
  )
}

export default About