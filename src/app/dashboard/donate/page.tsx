"use client";
import { CardDonate } from "@/components/user-dashboard-components/CardDonate";
import dog from "../../../../public/cachorro-filhote.jpg";
import qrCodeDogs from "../../../../public/qr_code.png";
import { useCallback, useEffect, useState } from "react";
import { setupAPIClient } from "@/app/lib/api";
import { Campaign } from "@/types/Campaing";


export default function Donate() {
	const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const api = setupAPIClient();
	const effectGetPosts = useCallback(async () => {
    
		try {
			const response = await api.get("/campaigns");
			console.log(response)
			setCampaigns(response.data)
		  } catch (err: any) {
			console.log(err);
		  }
      }, []);

      useEffect(() => {
       effectGetPosts();
      }, []);
	
	return (
		<div className="flex flex-col justify-center items-center w-100%  max-w-[1600px] mt-[110px]">
			<h1 className="text-[#5B5B5B] text-2xl font-bold self-center mb-8">
				Campanhas de Doação
			</h1>

			<div className="grid grid-cols-3 w-max pt-4 gap-14">

				{
					campaigns && campaigns?.length > 0 && (
						campaigns.map(campaign => (
							<CardDonate
							qrCode={campaign.qrCode}
							title={campaign.name}
							desc={campaign.description}
							icon={dog}
							recebedor={campaign.name}
							loc="https://maps.app.goo.gl/Qqqjob9FaYQPdxN16"
						/>
						))
					)
				}
			</div>
		</div>
	);
}
