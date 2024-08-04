"use client";

import { IoLogOutSharp } from "react-icons/io5";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <button
      className="flex flex-row justify-center items-center gap-2 text-white rounded-2xl bg-[#FF5A5A] py-2 px-4 "
      onClick={handleLogout}
    >
      <p className="uppercase font-semibold text-sm">Sair</p>
      <IoLogOutSharp />
    </button>
  );
}
