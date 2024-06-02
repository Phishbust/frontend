import React from 'react'

type consoleprops = {
  Url: string,
  Status: string,
}
const Console: React.FC<consoleprops> = ({Url, Status}) => {

  return (
    <div className='bg-[#12171A] z-20 mt-20 rounded-[8px] shadow-2xl w-full max-w-[656px] flex-1 p-5'>
      <div className='flex flex-row justify-between w-full'>
      <h1 className='text-[#5D666B]'>{'C://Phishbust > '}npm install Phishbust</h1>
      <svg className='' width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3" cy="3" r="3" fill="#35CC4B"/>
        <circle cx="11" cy="3" r="3" fill="#FDBE41"/>
        <circle cx="19" cy="3" r="3" fill="#FC635D"/>
      </svg>
      </div>
      <div className=''>
        <p>added 1 package, and audited 2 packages in 1s</p>
        <p>found 0 vulnerabilities</p>
        <h1 className='text-[#5D666B]'>{'C://Phishbust > '}Node PhishingChecker.js</h1>
        <p>Welcome to Phishbust!</p>
        <p>Your url is: {Url}</p>
        {Status == 'safe' ? <p className='text-[#8BFE61]'>Your url is safe!</p> : <p className='text-[#FE616A]'>Your url is not safe!</p>}
      </div>
    </div>
  )
}

export default Console