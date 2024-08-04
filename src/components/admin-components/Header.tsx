import Image from "next/image";
import logoSafe from "../../../public/logo_safe_white.png";
import { IoIosArrowDown } from "react-icons/io";
import LogoutButton from "./Buttons/Logout";

export default function AdminHeader() {
  return (
    <div className="flex w-screen justify-center items-center h-[80px] bg-adminGradient px-20">
      <div className="flex max-w-[1440px] w-[100%] h-[80px] justify-between items-center">
        <div className="flex flex-2 h-[80px] justify-start items-center">
          <Image
            src={logoSafe}
            alt="logo-safe"
            className="h-[49px] w-[119px]"
          />
        </div>
        <div className="flex flex-2 justify-end  items-center gap-6">
          <a
						href="/admin/donate"
						className="flex gap-3 justify-center items-center text-sm text-[#fff]"
					>
						CAMPANHA DE DOAÇÃO <IoIosArrowDown />
					</a>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
