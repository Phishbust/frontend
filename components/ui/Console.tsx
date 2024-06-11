import React from 'react'
import { jsx } from 'react/jsx-runtime';

type consoleprops = {
  Url: string,
  Status: boolean,
  who: {}
};



const Console: React.FC<consoleprops> = ({Url, Status,who}) => {
  const lines = [
    <h1 className='text-[#5D666B]' key="A">{'C://Phishbust > '}npm install Phishbust</h1>,
    <br key="B"/>,
    <p key="C">
      added <span className='text-[#35CC4B]'>1</span> package, and audited <span className='text-[#35CC4B]'>2</span> packages in <span className='text-[#35CC4B]'>1s</span>
    </p>,
    <p key="D">found <span className='text-[#35CC4B]'>0</span> vulnerabilities</p>,
    <h1 key="E" className='text-[#5D666B]'>{'C://Phishbust > '}Node PhishingChecker.js</h1>,
    <p key="F">Welcome to Phishbust!</p>,
    <p key="G">Your url is: {Url}</p>,
    Status ? <p key="H" className='text-[#FE616A]'>Your url is not safe!</p>: <p key="I" className='text-[#8BFE61]'>Your url is safe!</p>
  ];
  const [displayedLines, setDisplayedLines]= React.useState<JSX.Element[]>([])
  React.useEffect(() => {
    let currentLine = 0
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setDisplayedLines(prevLines => [...prevLines, lines[currentLine]])
        currentLine++
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='bg-[#12171A] z-20 mt-20 rounded-[8px] shadow-2xl w-full lg:max-w-[40vw] flex-1 p-5'>
      <div className='flex flex-row justify-end w-full'>
      <svg className='' width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3" cy="3" r="3" fill="#35CC4B"/>
        <circle cx="11" cy="3" r="3" fill="#FDBE41"/>
        <circle cx="19" cy="3" r="3" fill="#FC635D"/>
      </svg>
      </div>
      <div>
      {displayedLines.map((line) => (
        <div>{line}</div>))}
      </div>
    </div>
  )
}

export default Console