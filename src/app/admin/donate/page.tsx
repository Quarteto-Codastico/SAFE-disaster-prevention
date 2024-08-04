"use client"

import { CardAddDonate } from "@/components/admin-components/Cards/CardAddDonate";
import dog from "../../../../public/cachorro-filhote.jpg";
import { CardDonateAdmin } from "@/components/admin-components/Cards/CardDonate";
import { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { setupAPIClient } from "@/app/lib/api";
import { Campaign } from "@/types/Campaing";

export default function donate() {

	const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const api = setupAPIClient();
	const effectGetPosts = useCallback(async () => {
    
		try {
			const response = await api.get("/campaigns");
			setCampaigns(response.data)
		  } catch (err: any) {
			console.log(err);
		  }
      }, []);

      useEffect(() => {
       effectGetPosts();
      }, []);
	return (
		<div className="flex flex-col justify-center items-center w-100%  max-w-[1600px] mb-16 mt-10">
			<h1 className="text-[#fff] text-2xl font-bold self-center mb-8">
				Campanhas de Doação
			</h1>

			<div className="grid grid-cols-3 w-max pt-4 gap-14 tablet:grid-cols-1 lg:grid-cols-2 phone:grid-cols-1">

				{
					campaigns && campaigns?.length > 0 && (
						campaigns.map(campaign => (
							<CardDonateAdmin
							id={campaign.id}
							title={campaign.name}
							desc={campaign.description}
							icon={dog}
						/>
						))
					)
				}
				<CardAddDonate/>
			</div>
		</div>
	);
}