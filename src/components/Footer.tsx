"use client";

import Image from "next/image";
import LogoBlack from "./LogoBlack";
import Link from "next/link";
import { karla, montserrat } from "@/lib/fonts";

const Footer = () => {
  return (
    <footer className="w-full bg-[#ec600a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-4 md:w-72 shrink-0">
            <Link href="/home" className="flex items-center">
              <LogoBlack />
            </Link>
            <p
              className={`text-white/60 text-sm leading-relaxed ${karla.className}`}
            >
              Estamos aquí para facilitarte tu investigación financiera. Simple,
              rápido y confiable.
            </p>
            <div className="flex gap-4 mt-2">
              <Link
                href="https://github.com/ErkyHanma"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#ec600a] transition-colors duration-200 flex items-center justify-center"
              >
                <Image
                  src="/icon/github.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yenzel-báez-610251291"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#ec600a] transition-colors duration-200 flex items-center justify-center"
              >
                <Image
                  src="/icon/linkedin.svg"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  className=""
                />
              </Link>
            </div>
          </div>

          <div
            className={`flex flex-wrap gap-10 xl:gap-20 w-full md:justify-end ${karla.className}`}
          >
            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-sm uppercase tracking-widest mb-1">
                Servicios
              </p>
              <Link
                className="text-white/60 hover:text-white text-sm transition-colors"
                href="/calculadora"
              >
                Calculadora
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-sm uppercase tracking-widest mb-1">
                Nosotros
              </p>
              <Link
                className="text-white/60 hover:text-white text-sm transition-colors"
                href="/about"
              >
                About us
              </Link>
              <Link
                className="text-white/60 hover:text-white text-sm transition-colors"
                href="/contact"
              >
                Contáctanos
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-sm uppercase tracking-widest mb-1">
                Más
              </p>
              <Link
                className="text-white/60 hover:text-white text-sm transition-colors"
                href="/info"
              >
                Aprende
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 ${karla.className}`}
        >
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} InteresPlus. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
