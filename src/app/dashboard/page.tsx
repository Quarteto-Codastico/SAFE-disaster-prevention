import { CardEmergency } from "@/components/user-dashboard-components/CardEmergency";
import HelloUser from "@/components/user-dashboard-components/HelloUser";
import pm from '../../../public/pm.svg'
import bombeiros from '../../../public/bombeiros.svg'
import prf from '../../../public/rodovia.svg'
import policiaCivil from '../../../public/algemas.svg'
import defesaCivil from '../../../public/defesa_civil.svg'
import samu from '../../../public/samu.svg'


export default function Home() {
	return (
		<>
        <div
			className="w-min max-w-[1600px] flex flex-col gap-8 mt-[120px]"
		>
			<HelloUser/>
		</div>

        <h1 className="text-[#5B5B5B] text-2xl font-bold ml-20 mt-10">Contatos de Emergência:</h1>

        <div className="grid grid-cols-3 w-max pl-20 pt-4 gap-6">
            <CardEmergency ctt="190" title="Policia Militar" icon={pm}  bg="var(--gradientSafe, linear-gradient(285deg, #000 -31.98%, #1B8C1F 0.19%, #009606 25.36%, #09810E 53.15%, #004C03 102.03%)"/>
            <CardEmergency ctt="193" title="Corpo de Bombeiros" icon={bombeiros}  bg="var(--gradientSafe, linear-gradient(285deg, #000 -31.98%, #8C1B1B 0.19%, #960000 25.36%, #810909 53.15%, #4C0000 102.03%"/>
            <CardEmergency ctt="191" title="Policia Rodoviária Federal" icon={prf}  bg="var(--gradientSafe, linear-gradient(285deg, #000 -31.98%, #2B1B8C 0.19%, #0C0096 25.36%, #130981 53.15%, #02004C 102.03%"/>
            <CardEmergency ctt="197" title="Policia Civil" icon={policiaCivil}  bg="var(--gradientSafe, linear-gradient(285deg, #000 -31.98%, #D08124 0.19%, #965A00 25.36%, #813409 53.15%, #4C1B00 102.03%"/>
            <CardEmergency ctt="199" title="Defesa Civil" icon={defesaCivil}  bg="var(--gradientSafe, linear-gradient(285deg, #000 -31.98%, #5A1B8C 0.19%, #540096 25.36%, #3E0981 53.15%, #2F004C 102.03%"/>
            <CardEmergency ctt="199" title="SAMU" icon={samu}  bg="var(--gradientSafe, linear-gradient(285deg, #000 -31.98%, #7C1B8C 0.19%, #8A0096 25.36%, #7E0981 53.15%, #4C0049 102.03%"/>
        </div>
        </>
	);
}