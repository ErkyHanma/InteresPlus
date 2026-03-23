"use client";

import Image from "next/image";
import React from "react";
import LogoBlack from "./LogoBlack";
import Link from "next/link";
import { karla, montserrat } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg2  h-[480px]  flex flex-col w-full ">
      <div
        className={clsx(
          "flex flex-col md:flex-row h-[260px] ml-5 mr-7 px-2 md:px-4 lg:px-6 pt-16 gap-32 ",
          {
            "border-t  border-gray-400": pathname === "/home",
          },
        )}
      >
        <div className="flex w-full md:w-80 mr-28 flex-col  gap-5">
          <Link href={"/home"} className="flex items-center -mt-2">
            <LogoBlack />
          </Link>
          <p className={`font-semibold text-xl ${karla.className}`}>
            Estamos aqui para facilitarte tu investigacion
          </p>
        </div>

        <div className="flex gap-5 md:gap-10 xl:gap-28 w-full lg:justify-end">
          <div className={` flex flex-col ${karla.className} `}>
            <p className={`font-bold mb-6 text-black text-xl `}>Servicios</p>
            <Link className="font-medium text-gray-600" href={"/calculadora"}>
              Calculadora
            </Link>
          </div>

          <div className={` flex   flex-col ${karla.className} `}>
            <p className={`font-bold mb-6 text-black text-xl `}>
              Quienes somos
            </p>
            <Link className="font-medium text-gray-600" href={"/about"}>
              About us
            </Link>
            <Link className="font-medium text-gray-600" href={"/contact"}>
              Contactanos
            </Link>
          </div>

          <div className={` flex   flex-col ${karla.className} `}>
            <p className={`font-bold mb-6 text-black text-xl `}>Mas</p>
            <Link className="font-medium text-gray-600" href={"/info"}>
              Aprende
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <Link href={"https://github.com/ErkyHanma"}>
              <Image
                src={"/icon/github.svg"}
                alt="icon"
                width="0"
                height="0"
                sizes="100vw"
                className="min-w-[24px] h-auto "
              />
            </Link>

            <Link href={"www.linkedin.com/in/yenzel-báez-610251291"}>
              <Image
                src={"/icon/linkedin.svg"}
                alt="icon"
                width="0"
                height="0"
                sizes="100vw"
                className="min-w-[24px] h-auto "
              />
            </Link>

            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
