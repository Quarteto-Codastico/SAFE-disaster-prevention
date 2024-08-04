import Image from "next/image";
import footer_bg from "../../../public/footer_bg.svg";

export default function Footer() {
	return (
		<div className="flex relative w-[100%] max-w-[1600px] mx-auto">
			<div className="flex justify-between absolute top-[75%] -translate-y-1/2 left-[50%] -translate-x-1/2 w-[70%] font-light">
				<p className="flex flex-1 justify-center min-w-[400px]">
					SAFE prevenção de catástrofes
				</p>
				<p className="flex flex-1 justify-center">|</p>
				<p className="flex flex-1 justify-center"> © 2024</p>
				<p className="flex flex-1 justify-center ">|</p>
				<p className="flex flex-1 justify-center min-w-[400px]">
					Desenvolvido por Quarteto Codástico
				</p>
			</div>
			<Image src={footer_bg} alt="bg-footer" className="w-[100%]" />
		</div>
	);
}
