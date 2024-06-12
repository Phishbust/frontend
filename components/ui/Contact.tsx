"use client"
import React from 'react'
import loader from "@/public/loader.svg"
import Image from 'next/image';
import toast from 'react-hot-toast';
import { error } from 'console';
const notifySuccess = () => toast.success('Email Submitted succesfully!', {
      duration: 2000,
      style:{
        background:'black',
        color:'white',
      }
});
const notifyFailure = (error) => toast.error(error, {
  duration: 2000,
  style:{
    background:'black',
    color:'white',
  }
});
const Contact = () => {
      const [Firstname, setFirstname] = React.useState("");
      const [Lastname, setLastname] = React.useState("");
      const [Email, setEmail] = React.useState("");
      const [message, setmessage] = React.useState("");
      const [loading,setloading] = React.useState(false);
      const HandleSubmit = async (e) => {
            e.preventDefault();
            await sendEmail(Firstname, Email, Lastname, message);
      };
      const sendEmail = async (Firstname, Email,Lastname,message)=>{
            setloading(true);
            if(!Firstname || !Email || !Lastname || !message){
                  alert("Please fill all the fields");
            };
            const data = {
                  name  :Firstname+" "+Lastname,
                  email:Email,
                  subject:"Contact Form",
                  message:message
            };
            fetch("/api/email", {
              method: "POST",
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json", Accept: "application/json" },
            }).then((res) => {
              if (!res.ok) throw new Error("Failed to send message");
              notifySuccess();
              return res.json();
            }).catch((error)=>notifyFailure(error.message)).finally(()=>{
              setFirstname("");
            setLastname("");
            setEmail("");
            setmessage("");
            setloading(false);
            })
           };
  return (
    <div className="bg-[#BEC3C6] p-20 flex flex-col lg:flex-row justify-evenly items-center z-20">
        <div className="max-w-lg w-full relative">
        <svg width="300" height="300" viewBox="0 0 381 401" fill="none" className='absolute top-[-120px] left-[-200px]' xmlns="http://www.w3.org/2000/svg">
            <circle cx="180.5" cy="200.5" r="200" stroke="#0284C7"/>
            <circle cx="180.5" cy="200.5" r="151" stroke="#0284C7"/>
            <circle cx="180.5" cy="200.5" r="105" stroke="#0284C7"/>
        </svg>
            <h2 className="text-5xl font-bold mb-4 text-[#013956]">Get In touch</h2>
            <p className="mb-6 text-[#013A56] font-normal text-2xl">Got an issue with using the tool? don&apos;t hesitate in getting in touch with us!</p>
        </div>
      <form onSubmit={(e)=>HandleSubmit(e)} className="space-y-4 z-20 text-black">
          <div className="flex space-x-4">
            <input 
              type="text" 
              placeholder="First Name"
              value={Firstname}
              onChange={(e) => setFirstname(e.target.value)} 
              className="w-1/2 p-2 border border-[#91A6B3] bg-white placeholder-[#3D4D57] rounded"
            />
            <input 
              type="text" 
              placeholder="Last Name"
              value={Lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-1/2 p-2 border border-[#91A6B3] bg-white placeholder-[#3D4D57] rounded"
            />
          </div>
          <input 
            type="email" 
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 border border-[#91A6B3] bg-white placeholder-[#3D4D57] rounded"
          />
          <textarea 
            placeholder="Message"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            className="w-full p-2 border border-[#91A6B3] bg-white placeholder-[#3D4D57] rounded h-32"
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white flex justify-center items-center font-bold p-2 rounded w-full disabled:bg-gray-800 disabled:cursor-not-allowed"
            disabled={!Firstname || !Email || !Lastname || !message}
          >
           {loading ? <Image src={loader} alt="loader" width={50}/> : "Submit"}
          </button>
        </form>
    </div>
  )
}

export default Contact;