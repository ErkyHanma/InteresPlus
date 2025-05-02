"use client";

import { useModal } from "@/hooks/useModal";
import Image from "next/image";

const Menu = () => {
  const { isOpen, onClose, onOpen } = useModal();

  return (
    <div className="justify-center items-baseline flex flex-col">
      {isOpen ? (
        <button className="duration-500" onClick={onClose}>
          <Image
            src="\icon\cross-small.svg"
            alt="Menu icon"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[28px] h-auto lg:hidden"
          />
        </button>
      ) : (
        <button className="duration-500" onClick={onOpen}>
          <Image
            src="\icon\menu-burger.svg"
            alt="Close icon"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[28px] h-auto lg:hidden "
          />
        </button>
      )}
    </div>
  );
};

export default Menu;
