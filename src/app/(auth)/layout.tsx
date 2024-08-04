import { ReactNode } from "react";
import Image from "next/image";
import logo from "../../../public/logo_safe.png";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="bg-[#FFFFFF] h-screen w-screen flex justify-center text-[#5B5B5B] font-semibold bg-bg_auth bg-center bg-cover">
      <div className="bg-[#FAFAFA] rounded-2xl self-center flex flex-col gap-6 items-center p-5">
        <Image src={logo} alt="logo" width={119} height={49} />
        {children}
      </div>
    </main>
  );
}
