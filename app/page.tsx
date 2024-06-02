import Image from "next/image";
import Input from "@/components/ui/Input";
import About from "@/components/ui/About";
import Howitworks from "@components/ui/Howitworks";
import Contact from "@components/ui/Contact";
import Footer from "@components/ui/Footer";
export default function Home() {
  return ( 
    <>
    <main className="z-50 h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-[#013956] font-bold text-5xl text-center">PhishBust</h1>
      <p className="text-[#013A56] font-normal text-2xl text-center">Machine learning based phishing detection</p>
      <Input/>
    </main>
    <article className="h-[100vh]" id="about-us">
      <About/>
    </article>
    <article className="h-[100vh]" id="how-it-works">
      <Howitworks/>
    </article>
    <section id="contact-us">
      <Contact/>
    </section>
    <footer>
      <Footer/>
    </footer>
    </>
   );
}
