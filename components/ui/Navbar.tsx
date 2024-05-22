"use client"
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navbar = () => {
    const [burger, setBurger] = useState(true)
  return (  
    <nav className='sticky top-0 p-5 bg-black/50 backdrop-blur-md h-20 justify-between items-center flex flex-row z-30'>
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
        <li className='hover:bg-slate-200 hover:text-black p-2 rounded'><Link href={"#"}>Home</Link></li>
        <li className='hover:bg-slate-200 hover:text-black p-2 rounded'><Link href={"#about-us"}>About Us</Link></li>
        <li className='hover:bg-slate-200 hover:text-black p-2 rounded'><Link href={"#how-it-works"}>How it works</Link></li>
        <li className='hover:bg-slate-200 hover:text-black p-2 rounded'><Link href={"#contact-us"}>Contact us</Link></li>
        </ul>
        <button className="inline-flex md:hidden items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={()=>setBurger(!burger)}>
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    </nav>
  )
}

export default navbar