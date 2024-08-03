"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../../../public/logo_safe.png";
import Image from "next/image";
import Link from "next/link";
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="bg-[#FFFFFF] h-screen w-screen flex justify-center text-[#5B5B5B] font-semibold">
      <div className="bg-[#FAFAFA] w-[408px] h-[525px] rounded-2xl self-center flex flex-col gap-6 items-center p-5">
        <Image src={logo} alt={"logo"} width={119} height={49} />
        <div className="w-[222px]">
          <h2 className="text-4xl mb-3">Olá denovo!</h2>
          <p className="text-base">Faça seu login na plataforma</p>
        </div>
        <form className="w-full flex flex-col items-center gap-4 text-[#5B5B5B]">
          <div className="w-[342px] flex flex-col gap-1">
            <label htmlFor="email" className="text-xl">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              className="w-full h-10 px-4 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              required
            />
          </div>
          <div className="w-[342px] flex flex-col gap-1 relative">
            <label htmlFor="password" className="text-xl">
              Senha
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              className="w-full h-10 px-4 pr-12 text-sm font-normal text-[#9F9F9F] border border-[#D1D1D1] rounded-lg"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-2/3 transform -translate-y-1/2 text-[#5dfec1] text-xl"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              style={{ width: "16px", height: "16px", lineHeight: "0" }}
            >
              {showPassword ? (
                <FaEyeSlash size={16} color="#5dfec1" />
              ) : (
                <FaEye size={16} color="#5dfec1" />
              )}
            </button>
          </div>
          <div className="w-[342px] text-xs font-normal flex justify-between">
            <Link href="/sign-up" className=" no-underline">
              Não tem cadastro? Clique aqui
            </Link>
            <p>Esqueceu a senha?</p>
          </div>
          <button
            type="submit"
            className="w-[90%] h-12 bg-[#4CAF50] text-white rounded-lg mt-4"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
