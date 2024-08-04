import Image from "next/image";
import logoSafe from "../../../public/logo_safe_white.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import Link from "next/link";

export default function Header() {
	return (
		<div className="flex fixed w-screen justify-center items-center h-[80px] bg-adminGradient px-20 z-10">
			<div className="flex max-w-[1440px] w-[100%] h-[80px] justify-between items-center">
				<div className="flex flex-2 h-[80px] justify-start items-center">
					<Link href="/">
						<Image
							src={logoSafe}
							alt="logo-safe"
							className="h-[49px] w-[119px]"
						/>
					</Link>
				</div>
				<div className="flex flex-1 gap-8 justify-center items-center text-white">
					<a
						href=""
						className="flex gap-3 justify-center items-center text-sm "
					>
						ÁREA DE ALERTAS <IoIosArrowDown />
					</a>
					<a
						href=""
						className="flex gap-3 justify-center items-center text-sm "
					>
						HISTÓRICO <IoIosArrowDown />
					</a>
					<a
						href=""
						className="flex gap-3 justify-center items-center text-sm "
					>
						CRIAR ALERTA <IoIosArrowDown />
					</a>
					<a
						href=""
						className="flex gap-3 justify-center items-center text-sm "
					>
						CRIAR CAMPANHA DE DOAÇÃO <IoIosArrowDown />
					</a>
				</div>
				<div className="flex justify-center flex-2 items-center gap-6">
					<button className="flex justify-center items-center gap-4 py-2 px-6  bg-[#FF5A5A] rounded-[16px] text-white">
						SAIR
						<IoLogOut className="text-4xl" />
					</button>
				</div>
			</div>
		</div>
	);
}
