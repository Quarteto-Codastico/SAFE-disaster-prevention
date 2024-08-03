import Image from "next/image";
import backgorundHero from "../../public/fundo_hero.png";

export default function Hero() {
	return (
		<div className="flex relative max-w-[1600px] w-[100%] h-[700px] bg-clientGradient self-center mx-auto pt-[80px]">
			<div className="absolute flex gap-8 flex-col pl-16 w-[870px] top-[50%] -translate-y-1/2 pt-[80px]">
				<h1 className="text-white text-5xl font-bold ">
					Uma plataforma feita pra salvar vidas! Ajude-nos a tornar o mundo um
					lugar seguro.
				</h1>
				<p className="text-[#5B5B5B] text-2xl w-[70%] font-light">
					Juntos, construindo resiliência e segurança para enfrentar os desafios
					das catástrofes naturais e humanas.
				</p>
			</div>
			<Image src={backgorundHero} alt="fundo-hero" className="absolute self-end right-0 bottom-0"/>
		</div>
	);
}
