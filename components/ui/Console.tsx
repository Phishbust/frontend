import React from 'react'

type consoleprops = {
  Url: string,
  Status: string,
}
const Console: React.FC<consoleprops> = ({Url, Status}) => {

  return (
    <div className='bg-[#12171A] z-20 mt-20 rounded-[8px] shadow-2xl w-[656px] p-20'>
        <h1>{'C://Phishbust > '}npm install Phishbust</h1>
        <p>added 1 package, and audited 2 packages in 1s</p>
        <p>found 0 vulnerabilities</p>
        <h1>{'C://Phishbust > '}Node PhishingChecker.js</h1>
        <p>Welcome to Phishbust!</p>
        <p>Your url is: {Url}</p>
        {Status == 'safe' ? <p className='text-[#8BFE61]'>Your url is safe!</p> : <p className='text-[#FE616A]'>Your url is not safe!</p>}
    </div>
  )
}

export default Console