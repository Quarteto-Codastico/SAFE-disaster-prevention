"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { setupAPIClient } from "@/app/lib/api";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const api = setupAPIClient();

    try {
      const response = await api.post(
        "/auth/login",
        { email, password },
        {
          withCredentials: true,
        }
      );

      const { access_token } = response.data;

      if (access_token) {
        Cookies.set("token", access_token);

        router.push("/dashboard");
      }
    } catch (err: any) {
      setMessage("Credenciais inválidas");
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-[222px]">
        <h2 className="text-4xl mb-3">Olá denovo!</h2>
        <p className="text-base">Faça seu login na plataforma</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center gap-4 text-[#5B5B5B]"
      >
        <div className="w-[342px] flex flex-col gap-1">
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            className="w-full h-10 px-4 pr-12 text-sm font-normal text-[#9F9F9F] border border-[#D1D1D1] rounded-lg"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-[70%] transform -translate-y-1/2 text-[#5dfec1] text-xl"
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
        {message && <p className="text-red-500 text-xs">{message}</p>}
        <div className="w-[342px] -mt-2 text-xs font-normal flex justify-between">
          <Link href="/sign-up" className="no-underline">
            Não tem cadastro? Clique aqui
          </Link>
          <p>Esqueceu a senha?</p>
        </div>
        <button
          type="submit"
          className="w-[342px] h-[58px] bg-clientGradient text-[#5B5B5B] rounded-lg mt-4 text-xl font-semibold"
        >
          ENTRAR
        </button>
      </form>
    </>
  );
}
