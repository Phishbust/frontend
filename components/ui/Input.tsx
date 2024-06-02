"use client"
import React from 'react'
import Console from '@/components/ui/Console'

const Input = () => {
  const [url,Seturl] = React.useState("")
  const [status,Setstatus] = React.useState("")
  const [submitted, setsubmitted] = React.useState(false)
  return (
    <>
    <div className="flex w-[75%] max-w-2xl h-14 z-20 mt-20 shadow-2xl ">
    <input
      type="text"
      className="flex-1 text-black p-5 rounded-l-md border border-gray-300 focus:outline-none"
      placeholder="Enter a link"

    />
    <button className="w-[60px] bg-green-500 hover:bg-green-600 text-white flex justify-center items-center rounded-r-md">
    <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30 40L40 30L30 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 30H40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </button>
  </div>
  {submitted && (<><Console Url={url} Status={"safe"} />
  <button type="button" className='bg-[#1D8641] rounded-[7px] p-[10px] z-20 mt-[27px]'>Download Result</button></>)}
  </>
  )
}

export default Input