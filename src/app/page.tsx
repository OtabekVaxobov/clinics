import Gallery, { Gallery2, Gallery3 } from "@/components/gallery/Gallery"
import Image from "next/image"
import  bg  from "../../public/page-bg.jpg";
import  Carusel  from "@/components/carusel";
import Mygov  from "../../public/mygov.jpg";
import Adliyadan  from "../../public/adliyadan.jpg";
import Narxlar  from "../../public/narxlar.jpg";
import { Pop } from "@/components/theme/Popover";
import Link from "next/link";
export default function Home() {
  return (
    <>
    
       <Image 
        className="hidden md:flex"
        width={0}
        height={0}
        src={bg}
        alt="background_picture"/>
          <div className="flex flex-col w-full bg-blue-600 p-4 py-10 sm:px-20 sm:flex-row justify-between items-center">
                    <p className=" text-white"> 
                    <span className="text-4xl font-medium">Biz bilan bog&apos;lanmoqchimisiz?</span>
                     <br/> 
                     <span className="text-lg">Hoziroq bog&apos;laning ! </span>
                     </p>
                    <p className="font-medium text-slate-700  dark:text-white  hover:bg-slate-700 duration-150"><Pop/></p>
                </div>
      <main className="flex min-h-screen flex-col items-center justify-between sm:p-24">
        <Carusel/>
        <Gallery />
        {/* <Gallery2 /> */}
        
        

        <Gallery3 />

      

      </main>
     
      <section id="hujjatlar" className="flex flex-row justify-center gap-4 py-8">
        <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1PJVlWqWu_THeBSolZszUiRNMkcgqu8Wd/view?usp=sharing' title="Tashkilot haqida hujjat">
          <Image src={Mygov} alt={"hujjatlar"} width={100} height={100}/>
        </Link>
         <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1MXazB4ZxvYqjLfkHmeOJpYRLo5FSLbXC/view?usp=sharing' title="Tashkilot haqida hujjat">
         <Image src={Adliyadan} alt={"Tashkilot nomi almashinishi haqida"} width={100} height={100}/>
        </Link>
         <Link target="_blank" rel="noopener noreferrer" download href='https://drive.google.com/file/d/1RmcsfAJA_HpRy_QxcY684lD9P23vANsU/view?usp=sharing' title="Tashkilotda bor hizmatlar narxlari">
          <Image src={Narxlar} alt={"narxlar"} width={120} height={120}/>
        </Link>
      </section>

      
      
    </>
   
  )
}
