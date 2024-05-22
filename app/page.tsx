import Image from "next/image";
import Input from "@/components/ui/Input";


export default function Home() {
  return ( 
    <>
    <main className="z-50 mt-[200px] flex flex-col justify-center items-center">
      <h1 className="text-[#013956] font-bold text-5xl text-center">PhishBust</h1>
      <p className="text-[#013A56] font-normal text-2xl text-center">Machine learning based phishing detection</p>
      <Input/>
    </main>
    </>
   );
}
