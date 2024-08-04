"use client";

import Image from "next/image";
import logoSafe from "../../../public/logo_safe.png";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  function handleRedirectToLogin() {
    router.push("/sign-in");
  }

  function handleRedirectToSignUp() {
    router.push("/sign-up");
  }

  return (
    <div className=" fixed w-full mx-auto h-[80px] bg-white px-20 z-10">
      <div className="flex max-w-[1440px] w-[100%] h-[80px] justify-between items-center mx-auto">
        <div className="flex flex-2 h-[80px] justify-start items-center phone:mx-auto">
          <Image
            src={logoSafe}
            alt="logo-safe"
            className="h-[49px] w-[119px] "
          />
        </div>
        <div className="flex flex-1 gap-8 justify-center items-center lg:hidden tablet:hidden phone:hidden">
          <a
            href="#hero"
            className="flex gap-3 justify-center items-center text-sm"
          >
            SOBRE <IoIosArrowDown />
          </a>
          <a
            href="#features"
            className="flex gap-3 justify-center items-center text-sm"
          >
            FUNCIONALIDADES <IoIosArrowDown />
          </a>
          <a
            href="#donate"
            className="flex gap-3 justify-center items-center text-sm"
          >
            DOAÇÔES <IoIosArrowDown />
          </a>
        </div>
        <div className="flex flex-2 justify-end  items-center gap-6 phone:hidden">
          <button
            className="py-3 px-8 border-[2px] border-[#000] rounded-[16px]"
            onClick={handleRedirectToLogin}
          >
            Entrar
          </button>
          <button
            className="py-3 px-12  bg-[#3FFFB6] rounded-[16px] text-white"
            onClick={handleRedirectToSignUp}
          >
            CRIAR CONTA
          </button>
        </div>
      </div>
    </div>
  );
}
