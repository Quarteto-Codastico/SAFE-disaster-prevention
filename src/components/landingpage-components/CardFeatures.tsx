import { ReactNode } from "react";

interface CardFeaturesProps {
	icon: ReactNode;
	title: string;
	desc: string;
}

export const CardFeatures: React.FC<CardFeaturesProps> = ({
	title,
	icon,
	desc,
}) => {
	return (
		<div className="flex flex-col h-[281px] gap-6 w-[240px]">
			<div
				className="flex w-[79px] h-[79px] justify-center items-center text-white bg-[#75FFCA] rounded-[10px]
                        text-5xl"
			>
				{icon}
			</div>
			<h1 className="text-[#5B5B5B] text-2xl font-semibold">{title}</h1>
			<p className="text-[#5B5B5B] text-base font-light text-justify">{desc}</p>
		</div>
	);
};
