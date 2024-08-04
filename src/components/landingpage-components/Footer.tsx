import Image from "next/image";
import footer_bg from "../../../public/footer_bg.svg";

export default function Footer() {
	return (
		<div className=" relative w-[100%] max-w-[1600px] mx-auto ">
			<div className="flex justify-between absolute top-[75%] -translate-y-1/2 left-[50%] -translate-x-1/2 w-[100%] font-light
							 tablet:text-[10px] phone:text-[10px]">
				<p className="flex flex-1 justify-center min-w-[400px] phone:hidden tablet:min-w-[200px]">
					SAFE prevenção de catástrofes
				</p>
				<p className="flex flex-1 justify-center phone:min-w-[200px] phone:hidden tablet:hidden">|</p>
				<p className="flex flex-1 justify-center phone:hidden"> © 2024</p>
				<p className="flex flex-1 justify-center phone:hidden tablet:hidden">|</p>
				<p className="flex flex-1 justify-center min-w-[400px] phone:justify-center phone:min-w-[200px] 
							phone:pr-4 tablet:min-w-[200px]">
					Desenvolvido por Quarteto Codástico
				</p>
			</div>
			<Image src={footer_bg} alt="bg-footer" className="w-[100%]" />
		</div>
	);
}
