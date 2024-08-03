import { FaPersonBreastfeeding } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import donateBg from "../../../public/donate.svg";

export default function Donate() {
	return (
		<div className="relative h-[1159px] w-[100%] max-w-[1600px] pl-[115px] overflow-hidden mx-auto">
			<h1 className="text-[#5B5B5B] font-semibold text-4xl pb-14 w-[700px]">
				Doar támbem faz parte, ajude quem necessita! Sua ajuda muda vidas.
			</h1>
			<p className=" text-[#5B5B5B] text-base font-light text-justify w-[400px]">
				&ensp;&ensp;Você já parou para pensar no impacto que um simples gesto de
				generosidade pode ter na vida de alguém? Vivemos em um mundo onde muitas
				pessoas enfrentam dificuldades inimagináveis todos os dias. Mas, com sua
				ajuda, podemos transformar essas dificuldades em esperança e
				oportunidades.
				<br />
				<br />
				&ensp;&ensp;Imagine poder ser a luz na vida de uma criança que não tem
				acesso à educação adequada, o conforto para uma família que luta para
				colocar comida na mesa ou o suporte para um idoso que se sente sozinho e
				desamparado. Sua doação, seja ela grande ou pequena, tem o poder de
				mudar vidas de maneira profunda e duradoura.
				<br />
				<br />
				&ensp;&ensp;Cada contribuição que você faz não é apenas uma quantia em
				dinheiro, mas uma demonstração de amor e solidariedade. É um passo em
				direção a um mundo mais justo e humano, onde todos têm a chance de viver
				com dignidade e respeito. Quando você doa, você não só ajuda a suprir
				necessidades imediatas, mas também investe em um futuro melhor para
				todos.
			</p>
			<h1 className="text-[#5B5B5B] font-light text-4xl w-[300px] mt-20 mb-6">
				Vulnerabilidade Social no Brasil:
			</h1>
			<div className="flex items-center h-min">
				<FaPersonBreastfeeding className="text-5xl text-[#3FFFB6] mr-8" />
				<FaPlus className="text-3xl text-[#5B5B5B] mr-2" />
				<h1 className="text-[#5B5B5B] font-bold text-4xl  w-[500px]">
					17,5 mi de Famílias
				</h1>
			</div>

			<Image src={donateBg} alt="bg-donate" className="absolute top-0 left-[45rem] h-[100%]"  />
		</div>
	);
}
