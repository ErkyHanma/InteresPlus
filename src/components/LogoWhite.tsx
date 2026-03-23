import Image from "next/image";
import { rubik } from "../lib/fonts";

const LogoBlack = () => {
  return (
    <div className="flex items-baseline gap-1">
      <Image
        src={"/icon/signal-alt-2.svg"}
        alt="icon"
        width="0"
        height="0"
        sizes="100vw"
        className="w-[32px] h-auto white-svg"
      />
      <span
        className={`${rubik.className} text-[#fff] text-2xl font-semibold
        `}
      >
        InteresPlus
      </span>
    </div>
  );
};

export default LogoBlack;
