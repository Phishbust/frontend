import React from 'react'

const footer = () => {
  return (
    <div className='flex flex-row justify-between p-8'>
        <h1 className='text-[#013956] font-bold text-lg md:text-2xl'>PhishBust</h1>
        <ol className='flex flex-row gap-3 md:gap-10 text-[#516975] font-medium md:text-xl'>
            <li>
                <a href="https://github.com/Phishbust" target='_blank'>Github</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/yamen-kashkash-25660a291/" target='_blank'>Linkedin</a>
            </li>
            <li>
                <a href="https://www.kaggle.com/code/yesdodata/phishbust" target='_blank'>Kaggle</a>
            </li>
        </ol>
    </div>
  )
}

export default footer