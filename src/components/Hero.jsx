import { LuImport } from "react-icons/lu"
// import benson from '../assets/benson.webp'
 import sahla from '../assets/sahla.jpg'


const Hero = () => {
  return (
    <section>
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
                Sahla <br/> Thasnim
            </h1>
            <div className="mt-8">
                <a href="../public/sahlaThasnim_resume.pdf" download className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-300">
        <span>Resume.pdf</span>
        <LuImport className="ml-2"/>
    </a>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <img src={sahla} alt="sahla Thasnim" className="mt-8 h-full w-full object-cover" />

            </div>
        </div>
    </section>
  )
}

export default Hero
