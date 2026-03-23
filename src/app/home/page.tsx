import HomeInfo from "@/components/ui/HomeInfo";
import { karla, montserrat, rubik } from "@/lib/fonts";
import { homeInfo } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full min-h-screen pt-16">
      <section className="fade-in-text items-center w-full flex justify-center pt-20 px-4 mb-32">
        <div className="flex flex-col items-center text-center">
          <p
            className={`text-4xl sm:text-5xl max-w-[700px] xl:text-7xl duration-300 ${montserrat.className} font-bold `}
          >
            Calcula y visualiza tus inversiones
          </p>
          <p
            className={` text-gray-500 max-w-[450px]  duration-300 text-base  md:text-lg  xl:w-[600px]  xl:text-xl font-medium mt-6 md:mt-5  ${karla.className}`}
          >
            Tu herramienta definitiva para planificar y visualizar el
            crecimiento de tus inversiones.
          </p>

          <Link
            className="font-bold mt-12 py-4 px-8 rounded-full text-base md:text-xl  text-white bg-[#ec600a]"
            href={"/calculadora"}
          >
            Empezar
          </Link>

          <Image
            src={"/icon/undraw_small_town_re_7mcn.svg"}
            alt="icon"
            width="1000"
            height="1000"
            className="w-full max-w-[1000px] h-auto pt-12"
          />
        </div>
      </section>

      <section className="gap-20 min-h-[520px] bg-[#dcdcdc] flex flex-col items-center py-24 px-5 md:px-24">
        <p
          className={`font-semibold text-center  w-full text-3xl md:text-4xl ${karla.className}`}
        >
          Estamos aqui para facilitarte tu investigacion
        </p>
        <div className="flex ">
          <div className="flex md:flex-row flex-col gap-12">
            {homeInfo.map((item) => (
              <HomeInfo
                key={item.titulo}
                icon={item.icon}
                title={item.titulo}
                info={item.informacion}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className=" flex items-center px-8 py-48 h-full justify-center w-full">
        <div className="flex flex-col items-center text-center  md:w-[950px]">
          <p
            className={`text-4xl md:text-5xl xl:text-6xl duration-300  ${montserrat.className} font-bold`}
          >
            Empieza a mejorar tus inversiones hoy
          </p>
          <p
            className={` text-gray-500 text-lg md:w-[650px]  md:text-xl font-medium mt-6 md:mt-5  ${karla.className}`}
          >
            Calcula y visualiza tus inversiones de forma simple y rápida.
          </p>

          <Link
            className="font-bold mt-12 hover:scale-105 duration-200 py-4 px-8 rounded-full text-xl  text-white bg-[#ec600a]"
            href={"/calculadora"}
          >
            <ArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
