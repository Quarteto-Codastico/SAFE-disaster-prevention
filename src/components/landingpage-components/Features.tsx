import { CardFeatures } from "./CardFeatures";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiAlertFill } from "react-icons/ri";
import { BiSolidDonateHeart } from "react-icons/bi";

export default function Features() {
	return (
		<div id='features' className="flex flex-col h-[562px] max-w-[1600px] w-[100%] px-[79px] justify-center mx-auto">
            <h1 className="text-[#5B5B5B] font-semibold text-2xl pb-14 pl-9">Conheça as Funcionalidades</h1>
			<div className="flex gap-32 items-center justify-between self-center">
				<CardFeatures
					icon={<FaMapLocationDot />}
					title="Localize Ocorrências"
					desc="Localize em tempo real possíveis acontecimentos perto da sua localização e evite supresas arriscadas"
				/>
				<div className="h-[150px] w-[1px] border-[1px] border-l-[#5B5B5B]"></div>
				<CardFeatures
					icon={<RiAlertFill />}
					title="Crie Alertas"
					desc="Avise outras pessoas perto de você sobre algo de extremo risco que pode impacta-las, evitando acidentes indesejados."
				/>
                <div className="h-[150px] w-[1px] border-[1px] border-l-[#5B5B5B]"></div>
				<CardFeatures
					icon={<BiSolidDonateHeart />}
					title="Faça Doações"
					desc="Ajude de forma solidária pessoas vítimas de catástrofes e causas que necessitam de apoio financeiro."
				/>
			</div>
		</div>
	);
}
