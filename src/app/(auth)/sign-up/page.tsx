"use client";

import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import { setupAPIClient } from "@/app/lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Lista de estados do Brasil
const states = [
  { code: "AC", name: "Acre" },
  { code: "AL", name: "Alagoas" },
  { code: "AP", name: "Amapá" },
  { code: "AM", name: "Amazonas" },
  { code: "BA", name: "Bahia" },
  { code: "CE", name: "Ceará" },
  { code: "DF", name: "Distrito Federal" },
  { code: "ES", name: "Espírito Santo" },
  { code: "GO", name: "Goiás" },
  { code: "MA", name: "Maranhão" },
  { code: "MT", name: "Mato Grosso" },
  { code: "MS", name: "Mato Grosso do Sul" },
  { code: "MG", name: "Minas Gerais" },
  { code: "PA", name: "Pará" },
  { code: "PB", name: "Paraíba" },
  { code: "PR", name: "Paraná" },
  { code: "PE", name: "Pernambuco" },
  { code: "PI", name: "Piauí" },
  { code: "RJ", name: "Rio de Janeiro" },
  { code: "RN", name: "Rio Grande do Norte" },
  { code: "RS", name: "Rio Grande do Sul" },
  { code: "RO", name: "Rondônia" },
  { code: "RR", name: "Roraima" },
  { code: "SC", name: "Santa Catarina" },
  { code: "SP", name: "São Paulo" },
  { code: "SE", name: "Sergipe" },
  { code: "TO", name: "Tocantins" },
];

export default function SignUp() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "Brasil",
    zipCode: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [conflictError, setConflictError] = useState("");

  const router = useRouter();

  const fetchAddress = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setAddress({
          street: data.logradouro || "",
          city: data.localidade || "",
          state: data.uf || "",
          country: "Brasil",
          zipCode: data.cep || "",
        });
        setError(""); // Limpa qualquer mensagem de erro
      } else {
        setAddress({
          street: "",
          city: "",
          state: "",
          country: "Brasil",
          zipCode: "",
        });
        setError("CEP não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      setError("Erro ao buscar o CEP. Tente novamente.");
    }
  };

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = event.target.value;
    setCep(newCep);

    if (newCep.length === 9 && newCep.includes("-")) {
      const cepOnlyNumbers = newCep.replace(/\D/g, "");
      fetchAddress(cepOnlyNumbers);
    } else {
      setAddress({
        street: "",
        city: "",
        state: "",
        country: "Brasil",
        zipCode: "",
      });
      setError("");
    }
  };

  useEffect(() => {
    if (cep.length === 9 && cep.includes("-")) {
      const cepOnlyNumbers = cep.replace(/\D/g, "");
      fetchAddress(cepOnlyNumbers);
    }
  }, [cep]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("As senhas não coincidem.");
      return;
    } else {
      setPasswordError("");
    }

    const api = setupAPIClient();

    try {
      await api.post(
        "/users",
        {
          name,
          email,
          password,
          role: "client",
          cpf,
          address: {
            street: address.street,
            city: address.city,
            state: address.state,
            country: address.country,
            zipCode: address.zipCode,
          },
        },
        {
          withCredentials: true,
        }
      );

      router.push("/sign-in");
    } catch (err: any) {
      if (err.response?.status === 409) {
        setConflictError("Usuário já existente.");
      } else {
        console.error("Erro ao cadastrar usuário:", err);
      }
    }
  };

  return (
    <>
      <div className="w-[550px] flex flex-col items-center">
        <h2 className="text-3xl mb-3">Vamos Começar!</h2>
        <p className="text-base">Faça seu cadastro na plataforma</p>
      </div>
      <form
        className="w-full flex flex-col items-center gap-2 text-[#5B5B5B]"
        onSubmit={handleSubmit}
      >
        <div className="w-[550px] flex flex-col gap-1">
          <label htmlFor="name" className="text-lg">
            Nome
          </label>
          <input
            id="name"
            type="text"
            placeholder="Digite seu nome"
            className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="w-[550px] flex flex-row gap-2">
          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cpf" className="text-lg">
              CPF
            </label>
            <InputMask
              id="cpf"
              mask="999.999.999-99"
              placeholder="Digite seu CPF"
              className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="w-[550px] flex flex-col gap-1">
          <label className="text-lg">Endereço</label>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <InputMask
                id="cep"
                mask="99999-999"
                placeholder="CEP"
                className="flex-1 h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
                value={cep}
                onChange={handleCepChange}
                required
              />
            </div>
            <div className="flex gap-2">
              <input
                id="street"
                type="text"
                placeholder="Rua"
                className="flex-1 h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
                value={address.street}
                onChange={(e) =>
                  setAddress({ ...address, street: e.target.value })
                }
                required
              />
              <input
                id="city"
                type="text"
                placeholder="Cidade"
                className="h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                required
              />
              <select
                id="state"
                className="w-[70px] h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
                value={address.state}
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
                required
              >
                <option value="" disabled>
                  Estado
                </option>
                {states.map((state) => (
                  <option key={state.code} value={state.code}>
                    {state.code}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-red-500 text-sm mt-1">{error}</p>
          </div>
        </div>
        <div className="w-[550px] flex flex-col gap-1">
          <label htmlFor="password" className="text-lg">
            Senha
          </label>
          <div className="flex flex-row gap-2">
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
          {conflictError && (
            <p className="text-red-500 text-sm mt-1">{conflictError}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-[342px] h-[58px] bg-clientGradient text-[#5B5B5B] rounded-lg mt-4 text-xl font-semibold"
        >
          CADASTRAR-SE
        </button>
        <div className="mt-4 text-xs font-normal">
          <p>
            Já tem cadastro?{" "}
            <Link href="/sign-in" className="text-[#4CAF50]">
              Clique aqui
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
