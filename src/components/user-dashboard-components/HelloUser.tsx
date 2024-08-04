import Hands from "../../../public/hands_user.svg";
import Image from "next/image";

export default function HelloUser() {
	return (
		<div
			className="flex flex-row w-max ml-20"
		>
				<h1 className="text-[#A8A8A8] text-3xl font-bold"> Olá <span className="text-[#5B5B5B]">Wendel</span>, Bem vindo ao SAFE !</h1>

			<div className="animate-bounce">
				<Image src={Hands} alt="hands" />
			</div>
		</div>
	);
}
