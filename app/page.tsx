import Image from "next/image";
import Input from "@/components/ui/Input";
import About from "@/components/ui/About";
import Howitworks from "@components/ui/Howitworks";
import Contact from "@components/ui/Contact";

export default function Home() {
  return ( 
    <>
    <main className="z-50 mt-[200px] flex flex-col justify-center items-center">
      <h1 className="text-[#013956] font-bold text-5xl text-center">PhishBust</h1>
      <p className="text-[#013A56] font-normal text-2xl text-center">Machine learning based phishing detection</p>
      <Input/>
    </main>
    <article>
      <About/>
    </article>
    <article>
      <Howitworks/>
    </article>
    <section>
      <Contact/>
    </section>
    </>
   );
}
