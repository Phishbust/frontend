"use client"
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar: React.FC = () => {
    const [burger, setBurger] = useState(true);
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth',
        });
    };

    return (
        <nav className='sticky top-0 p-5 bg-black/60 backdrop-blur-md h-20 justify-between items-center flex flex-row'>
            <Link href="/" className='flex flex-row items-center'>
                <Image
                    src="/PhishBustW.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                />
            </Link>
            <ul className={"list-none flex flex-row gap-10 text-white text-center md:flex " + (burger ? "hidden":"flex flex-col absolute top-20 left-0 right-0 bg-black/50 backdrop-blur-md p-5 md:static md:flex-row md:bg-transparent md:backdrop-blur-none")}>
                <li className='hover:bg-slate-200 hover:text-black p-2 rounded'><button onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}>Home</button></li>
                <li className='hover:bg-slate-200 hover:text-black p-2 rounded'><button onClick={(e) => handleScroll(e, "about-us")}>About Us</button></li>
                <li className='hover:bg-slate-200 hover:text-black p-2 rounded'><button onClick={(e) => handleScroll(e, "how-it-works")}>How it Works</button></li>
                <li className='hover:bg-slate-200 hover:text-black p-2 rounded'><button onClick={(e) => handleScroll(e, "contact-us")}>Contact Us</button></li>
            </ul>
            <button title="hamburger toggle" className="inline-flex md:hidden items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setBurger(!burger)}>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
        </nav>
    );
};

export default Navbar;
