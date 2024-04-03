"use client"
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navbar = () => {
    const [burger, setBurger] = useState(true)
  return (  
    <nav className='sticky top-0 p-5 bg-black/50 backdrop-blur-md h-15 justify-between items-center flex flex-row max-md:flex-col'>
    <Link  href="/"className='flex flex-row items-center '>
    <Image
      src="/PhishBustW.png"
      width={75}
      height={50}
      alt="Picture of the author"
    />
    <h1 className='text-xl font-bold'>Phishbust</h1>
    </Link>
        <ul className={"list-none flex flex-row gap-10 text-white text-center " + (burger ? "max-md:hidden":"max-md:block max-md:flex-col")}>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about-us"}>About Us</Link></li>
        <li><Link href={"/how-it-works"}>How it works</Link></li>
        <li><Link href={"/contact-us"}>Contact us</Link></li>
        </ul>
    </nav>
  )
}

export default navbar