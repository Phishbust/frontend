import React from 'react'

const Input = () => {
  return (
    <div className="flex w-full max-w-md z-20 mt-20">
    <input
      type="text"
      className="flex-grow text-black p-2 rounded-l-md border border-gray-300 focus:outline-none"
      placeholder="www.example.com"

    />
    <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-r-md">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"
        ></path>
      </svg>
    </button>
  </div>
  )
}

export default Input