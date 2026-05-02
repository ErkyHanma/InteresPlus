import HomeInfo from "@/components/ui/HomeInfo";
import { karla, montserrat, rubik } from "@/lib/fonts";
import { homeInfo } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-16">
      <section className="fade-in-text mb-32 flex w-full items-center justify-center px-4 pt-20">
        <div className="flex flex-col items-center text-center">
          <p
            className={`max-w-[700px] text-4xl duration-300 sm:text-5xl xl:text-7xl ${montserrat.className} font-bold`}
          >
            Calcula y visualiza tus inversiones
          </p>
          <p
            className={`mt-6 max-w-[450px] text-base font-medium text-gray-500 duration-300 md:mt-5 md:text-lg xl:w-[600px] xl:text-xl ${karla.className}`}
          >
            Tu herramienta definitiva para planificar y visualizar el
            crecimiento de tus inversiones.
          </p>

          <Link
            className="mt-12 rounded-full bg-[#ec600a] px-8 py-4 text-base font-bold text-white md:text-xl"
            href={"/calculadora"}
          >
            Empezar
          </Link>

          <Image
            src={"/icon/undraw_small_town_re_7mcn.svg"}
            alt="icon"
            width="1000"
            height="1000"
            className="h-auto w-full max-w-[1000px] pt-12"
          />
        </div>
      </section>

      <section className="flex min-h-[520px] flex-col items-center gap-20 bg-[#dcdcdc] px-5 py-24 md:px-24">
        <p
          className={`w-full text-center text-3xl font-semibold md:text-4xl ${karla.className}`}
        >
          Estamos aqui para facilitarte tu investigacion
        </p>
        <div className="flex">
          <div className="flex flex-col gap-12 md:flex-row">
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

      <section className="flex h-full w-full items-center justify-center px-8 py-48">
        <div className="flex flex-col items-center text-center md:w-[950px]">
          <p
            className={`text-4xl duration-300 md:text-5xl xl:text-6xl ${montserrat.className} font-bold`}
          >
            Empieza a mejorar tus inversiones hoy
          </p>
          <p
            className={`mt-6 text-lg font-medium text-gray-500 md:mt-5 md:w-[650px] md:text-xl ${karla.className}`}
          >
            Calcula y visualiza tus inversiones de forma simple y rápida.
          </p>

          <Link
            className="mt-12 rounded-full bg-[#ec600a] px-8 py-4 text-xl font-bold text-white duration-200 hover:scale-105"
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
