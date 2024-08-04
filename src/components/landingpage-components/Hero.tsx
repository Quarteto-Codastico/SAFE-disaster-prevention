"use client";
import Image from "next/image";
import backgorundHero from "../../../public/fundo_hero.png";
import { useRouter } from "next/navigation";


export default function Hero() {
	const router = useRouter();

	function handleRedirectToLogin() {
		router.push("/sign-in");
	}

	function handleRedirectToSignUp() {
		router.push("/sign-up");
	}

	return (
		<div
			id="hero"
			className="relative max-w-[1600px] w-full h-[700px] bg-clientGradient mx-auto pt-[80px] overflow-hidden"
		>
			<div
				className="absolute flex gap-8 flex-col pl-16 w-[60%] top-[50%] -translate-y-1/2 pt-[80px] phone:w-[95%] phone:top-[20rem] phone:pl-4 phone:text-center
							phone:pt-0"
			>
				<h1 className="text-white text-5xl font-bold lg:text-4xl tablet:text-3xl phone:text-4xl">
					Uma plataforma feita pra salvar vidas! Ajude-nos a tornar o mundo um
					lugar seguro.
				</h1>
				<p className="text-[#5B5B5B] text-2xl w-[70%] font-light phone:font-extralight phone:text-xl phone:mx-auto">
					Juntos, construindo resiliência e segurança para enfrentar os desafios
					das catástrofes naturais e humanas.
				</p>
			</div>
			<Image
				src={backgorundHero}
				alt="fundo-hero"
				className="absolute self-end right-0 bottom-0 tablet:left-[30rem] lg:left-[50rem] phone:hidden"
			/>
			<div className="hidden w-[100%] absolute bottom-14 phone:flex flex-2 justify-center items-center gap-6">
				<button
					className="py-3 px-8 border-[2px] border-[#fff] text-[#fff] rounded-[16px]"
					onClick={handleRedirectToLogin}
				>
					Entrar
				</button>
				<button
					className="py-3 px-12  bg-[#39e7a4] rounded-[16px] text-white"
					onClick={handleRedirectToSignUp}
				>
					CRIAR CONTA
				</button>
			</div>
		</div>
	);
}
