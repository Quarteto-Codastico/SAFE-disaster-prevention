import Image, { ImageProps, StaticImageData } from "next/image";
import { ReactNode } from "react";

interface CardEmergencyProps {
	icon: StaticImageData;
	ctt: string;
	title: string;
	bg: string;
}

export const CardEmergency: React.FC<CardEmergencyProps> = ({
	icon,
	ctt,
	title,
	bg,
}) => {
	return (
		<div
			className={`relative w-[400px] h-[200px] rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px]`}
			style={{
				background: `${bg}`,
			}}
		>
			<h1 className="text-white font-bold text-5xl pl-4 pt-4">{ctt}</h1>
			<p className="text-white text-sm pl-4 ">{title}</p>
			<Image
				src={icon}
				alt="icon"
				className={`absolute bottom-2 right-3 `}
			/>
		</div>
	);
};
