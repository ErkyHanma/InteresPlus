"use client";

import Link from "next/link";
import Menu from "./Menu";
import Logo from "./Logo";
import { headers_links } from "@/constants/index";
import { useModal } from "@/hooks/useModal";
import { rubik } from "../lib/fonts";

const Header = () => {
  const { isOpen, onClose } = useModal();

  return (
    <>
      <div className="flex shadowHeader bg-white  z-50 fixed w-full top-0 py-3.5 px-6 items-center justify-between border-gray-200 border-b-2  md:border-none">
        <Link onClick={onClose} href={"/home"} className="flex items-center ">
          <Logo />
        </Link>
        <div className="flex flex-col items-baseline gap-1">
          <Menu />

          <div className="gap-0.5 lg:gap-2 hidden lg:flex">
            {headers_links.map((item) => (
              <Link
                key={item.name}
                className="font-medium  hover:bg-gray-200 duration-100 py-2 px-5 rounded-md  "
                href={item.href}
              >
                {item.name}
              </Link>
            ))}

            <div className="bg-gray-300 w-[1.5px] h-7 self-center rounded-md "></div>

            <Link
              className="font-bold mr-4 ml-6 py-2 px-5 rounded-md  text-white bg-[#ec600a]"
              href={"/calculadora"}
            >
              Empezar
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="lg:hidden animate-in translate-y-5 z-50  duration-700 flex-col  fixed w-full  mt-[50px]  py-8 bg-white px-6 gap-3 flex">
            {headers_links.map((item) => (
              <Link
                onClick={onClose}
                href={item.href}
                className={`${rubik.className}  text-md font-semibold cursor-pointer hover:bg-gray-200  p-2 rounded-md`}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div
            onClick={onClose}
            className="lg:hidden fixed w-full h-full bgTransparent  z-20 "
          ></div>
        </>
      )}
    </>
  );
};

export default Header;
