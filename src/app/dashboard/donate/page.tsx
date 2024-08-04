import { CardDonate } from "@/components/user-dashboard-components/CardDonate";
import dog from "../../../../public/cachorro-filhote.jpg";

export default function donate() {
	return (
		<div className="flex flex-col justify-center items-center w-100%  max-w-[1600px] mt-[110px]">
			<h1 className="text-[#5B5B5B] text-2xl font-bold self-center mb-8">
				Campanhas de Doação
			</h1>

			<div className="grid grid-cols-3 w-max pt-4 gap-14">
				<CardDonate
					title="Ajude os doguinhos"
					desc="faça uma doação para ajudar esses peludinhos"
					icon={dog}
				/>
				<CardDonate
					title="Ajude os doguinhos"
					desc="faça uma doação para ajudar esses peludinhos"
					icon={dog}
				/>
				<CardDonate
					title="Ajude os doguinhos"
					desc="faça uma doação para ajudar esses peludinhos"
					icon={dog}
				/>
				<CardDonate
					title="Ajude os doguinhos"
					desc="faça uma doação para ajudar esses peludinhos"
					icon={dog}
				/>
				<CardDonate
					title="Ajude os doguinhos"
					desc="faça uma doação para ajudar esses peludinhos"
					icon={dog}
				/>
				<CardDonate
					title="Ajude os doguinhos"
					desc="faça uma doação para ajudar esses peludinhos"
					icon={dog}
				/>
			</div>
		</div>
	);
}