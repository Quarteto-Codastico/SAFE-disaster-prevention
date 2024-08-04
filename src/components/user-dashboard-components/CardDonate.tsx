import Image, { ImageProps, StaticImageData } from "next/image";
import { ReactNode } from "react";

interface CardDonateProps {
	icon: StaticImageData;
	desc: string;
	title: string;
}

export const CardDonate: React.FC<CardDonateProps> = ({
	icon,
	title,
	desc,
}) => {
	return (
		<div
			className={`relative flex flex-col bg-clientGradient w-[400px] h-[200px] rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] overflow-hidden`}
		>
			<div className="my-auto text-[#5b5b5b] self-end w-[250px]">
				<h1 className=" font-bold text-3xl pl-4">
					{title}
				</h1>
				<p className=" text-sm pl-4 ">{desc}</p>
			</div>
			<Image
				src={icon}
				alt="icon"
				className={`absolute bottom-[3rem] right-[16rem] w-[180px] h-[180px] rounded-full`}
			/>
		</div>
	);
};
