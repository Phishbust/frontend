"use client"
import React from 'react'
import Console from '@/components/ui/Console'

const Input = () => {
  const [url,Seturl] = React.useState("")
  const [status,Setstatus] = React.useState(false)
  const [submitted, setsubmitted] = React.useState(false)
  const [who, setWho] = React.useState({})
  const fetchphishing = async () =>{
    const response = await fetch("/api/phishing",
      {
        method: "POST",
        body:JSON.stringify({link:url}),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    ).then((res) => {
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    });
    return response;
  };
  const handlesubmit = async () =>{
    setsubmitted(false);
    const res = await fetchphishing();
    Setstatus(res.phishing)
    setsubmitted(true);
  }
  const handleClick = async () => {
    const json_to_download = {
      url: url,
      phishing: status,
      whois: who
    }
    try {
      const json = JSON.stringify(json_to_download, null, 2);
      const blob = new Blob([json], { type: 'application/json' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'data.json';
      link.click();

      // Revoke the temporary URL after download
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    } catch (error) {
      console.error('Error downloading JSON:', error);
    }
  };
  return (
    <>
    <div className="flex w-[75%] max-w-2xl h-14 z-20 mt-20 shadow-2xl ">
    <input
      type="text"
      name='link input'
      value={url}
      onChange={(e)=>Seturl(e.target.value)}
      className="flex-1 text-black p-5 rounded-l-md border border-gray-300 focus:outline-none"
      placeholder="Enter a link"

    />
    <button title="submit button" onClick={handlesubmit} className="w-[60px] bg-green-500 hover:bg-green-600 text-white flex justify-center items-center rounded-r-md">
    <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30 40L40 30L30 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 30H40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </button>
  </div>
  {submitted && (<><Console Url={url} Status={status} who={who} />
  <button type="button" onClick={handleClick} className='bg-[#1D8641] rounded-[7px] p-[10px] z-20 mt-[27px]'>Download Result</button></>)}
  </>
  )
}

export default Input