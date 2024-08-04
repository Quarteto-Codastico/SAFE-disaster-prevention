import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

export default function suggestion() {
	const style = {
		position: "relative", // Necessário para posicionar o pseudo-elemento corretamente
		".chakra-checkbox__control": {
			width: "24px", // Largura do checkbox
			height: "24px", // Altura do checkbox
			padding: "4px", // Padding para o checkbox
			backgroundColor: "white", // Fundo branco quando desmarcado
			borderColor: "#75FFCA", // Cor da borda
			borderWidth: "2px", // Espessura da borda
			borderRadius: "4px", // Arredondamento do checkbox
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			transition: "background-color 0.2s, border-color 0.2s", // Transições suaves
			boxSizing: "border-box", // Inclui padding e borda no tamanho total
		},
		"input:checked + .chakra-checkbox__control": {
			backgroundColor: "#75FFCA", // Fundo verde quando marcado
			borderColor: "#75FFCA", // Borda verde quando marcado
		},
		"input:checked + .chakra-checkbox__control::before": {
			content: '""',
			display: "block",
			width: "16px",
			height: "16px",
			backgroundColor: "white", // Cor do marcador
			borderRadius: "4px", // Arredondamento do marcador
		},
		"input:focus + .chakra-checkbox__control": {
			boxShadow: "none", // Remove a sombra ao focar
		},
	};
	return (
		<div className="flex flex-col w-[100%] max-w-[1600px] h-[495px] mx-auto mt-[110px] mb-[170px]">
			<h1 className="text-[#5B5B5B] text-2xl font-bold self-center mb-8">
				Sugerir Alerta
			</h1>
			<div className="flex w-[916px] h-[400px] border-[3px] border-[#75FFCA] rounded-[20px] mx-auto mb-16 box-border">
				<div className="w-[100%] pl-8">
					<h1 className="text-[#5B5B5B] text-3xl font-semibold self-center   pt-4">
						Dados do Alerta
					</h1>
					<p className="text-[#5B5B5B] text-sm font-semibold self-center mb-8 ">
						Forneça as informações do novo alerta
					</p>

					<div className="flex flex-col justify-center gap-6 mt-10">
						<Checkbox sx={style}>
							<h1 className="text-[#5B5B5B] text-xl font-semibold self-center pl-1">
								O alerta está acontecendo agora?
							</h1>
						</Checkbox>
						<Checkbox sx={style}>
							<h1 className="text-[#5B5B5B] text-xl font-semibold self-center pl-1">
								Tem risco alto de vida?
							</h1>
						</Checkbox>
						<Checkbox sx={style}>
							<h1 className="text-[#5B5B5B] text-xl font-semibold self-center pl-1">
								Contatou as autoridades?
							</h1>
						</Checkbox>
						<Checkbox sx={style}>
							<h1 className="text-[#5B5B5B] text-xl font-semibold self-center pl-1">
								É recorrente?
							</h1>
						</Checkbox>
					</div>
				</div>
				<div
					className="flex flex-col w-[100%] items-end justify-center pr-8 h-[220px] my-auto
                                border-l-[4px] border-[#75FFCA] border-dashed"
				>
					<div className="w-[310px]">
						<h1 className="text-[#5B5B5B] text-xl font-semibold self-center pl-1">
							Nome
						</h1>
						<input
							type="text"
							placeholder="Nome do Alerta"
							className="w-[100%] border-[2px] border-[#5B5B5B] rounded-[10px] outline-none pl-4 py-[8px]"
						/>
					</div>
					<div className="w-[310px]">
						<h1 className="text-[#5B5B5B] text-xl font-semibold self-center pl-1">
							Tipo
						</h1>
						<input
							type="text"
							placeholder="Tipo em que se encaixa seu alerta"
							className="w-[100%] border-[2px] border-[#5B5B5B] rounded-[10px] outline-none pl-4 py-[8px]"
						/>
					</div>
					<div className="w-[310px]">
						<h1 className="text-[#5B5B5B] text-xl font-semibold self-center pl-1">
							Endereço da ocorrência
						</h1>
						<input
							type="text"
							placeholder="Onde está ocorrendo esse alerta"
							className="w-[100%] border-[2px] border-[#5B5B5B] rounded-[10px] outline-none pl-4 py-[8px]"
						/>
					</div>
				</div>
			</div>
			<button className="flex w-[150px] justify-center items-center font-semibold gap-4 py-2 px-6  bg-clientGradient rounded-[10px] text-[#5B5B5B] mx-auto">
				ENVIAR
			</button>
		</div>
	);
}
