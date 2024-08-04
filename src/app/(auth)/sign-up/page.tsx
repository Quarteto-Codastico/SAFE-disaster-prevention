"use client";

import { useState } from "react";
import Link from "next/link";
import InputMask from "react-input-mask";

export default function SignUp() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    street: "",
    neighborhood: "",
    city: "",
    number: "",
  });
  const [error, setError] = useState("");

  const fetchAddress = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setAddress({
          street: data.logradouro || "",
          neighborhood: data.bairro || "",
          city: data.localidade || "",
          number: "", // Mantém o número em branco para o usuário preencher
        });
        setError(""); // Limpa qualquer mensagem de erro
      } else {
        // Tratar erro de CEP inválido
        setAddress({
          street: "",
          neighborhood: "",
          city: "",
          number: "",
        });
        setError("CEP não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      // Tratar erros de requisição
      setError("Erro ao buscar o CEP. Tente novamente.");
    }
  };

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = event.target.value;
    setCep(newCep);

    // Verifica se o CEP tem o formato completo (99999-999) para fazer a busca
    if (newCep.length === 10 && newCep.includes("-")) {
      const cepOnlyNumbers = newCep.replace(/\D/g, ""); // Remove caracteres não numéricos
      fetchAddress(cepOnlyNumbers);
    } else {
      // Limpa os dados se o CEP for inválido ou incompleto
      setAddress({
        street: "",
        neighborhood: "",
        city: "",
        number: "",
      });
      setError("");
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
        onSubmit={(e) => e.preventDefault()}
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
            required
          />
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
              />
              <input
                id="neighborhood"
                type="text"
                placeholder="Bairro"
                className="flex-1 h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
                value={address.neighborhood}
                readOnly
              />
              <input
                id="number"
                type="text"
                placeholder="Número"
                className="flex-1 h-9 w-[52px] px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
                value={address.number}
                onChange={(e) =>
                  setAddress({ ...address, number: e.target.value })
                }
              />
            </div>
            <div className="flex gap-2">
              <input
                id="street"
                type="text"
                placeholder="Rua"
                className="flex-1 h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
                value={address.street}
                readOnly
              />
              <input
                id="city"
                type="text"
                placeholder="Cidade"
                className="flex-1 h-9 w-[50px] px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
                value={address.city}
                readOnly
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        </div>
        <div className="w-[550px] flex flex-col gap-1">
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
            required
          />
        </div>
        <div className="w-[550px] flex flex-col gap-1">
          <label className="text-lg">Senha</label>
          <div className="flex flex-row gap-2">
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              required
            />
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirme sua senha"
              className="w-full h-9 px-3 border text-[#9F9F9F] border-[#D1D1D1] rounded-lg text-sm font-normal"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-[550px] h-[50px] bg-clientGradient text-[#5B5B5B] rounded-lg mt-4 text-xl font-semibold"
        >
          CADASTRAR-SE
        </button>
        <Link href="/sign-in" className="no-underline text-xs font-normal">
          Já tem uma conta? Clique aqui
        </Link>
      </form>
    </>
  );
}
