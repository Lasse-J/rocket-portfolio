import { useState } from 'react'

import Image from 'next/image'

// Components
import Assets from '@/components/Assets'
import add from '@/app/assets/add.svg'
import minus from '@/app/assets/minus.svg'
import up from '@/app/assets/up.svg'
import down from '@/app/assets/down.svg'

const Overview = () => {

const [isAssetsModalOpen, setIsAssetsModalOpen] = useState(false)

const assetsModalHandler = () => {
	setIsAssetsModalOpen(true)
}

	return(
		<div className="overview bg-secondary-light col-span-full row-start-2 my-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 grid-dense place-items-end items-center pb-8 transition-all duration-250 ease-in-out">

			<div className="overview__tracked bg-primary-light text-light w-full h-[125px] p-4 rounded-md relative">
				<h3>Assets</h3>
				<p>0</p>
				<button onClick={assetsModalHandler}>
					<Image
						src={add}
						width={20}
						height={20}
						alt="Add asset"
					/>
				</button>
			</div>
			<div className="overview__total bg-primary-light text-light w-full h-[125px] p-4 rounded-md relative">
				<h3>Total Value</h3>
				<p>$0.00</p>
			</div>
			<div className="overview__change bg-primary-light text-light w-full h-[125px] p-4 rounded-md relative">
				<h3>% Change</h3>
				<p>
					<span className="text-green-500">0.00%
						<Image
							src={up}
							width={20}
							height={20}
							className="justify-center"
							alt="Trending up"
						/>
					</span>
				</p>
			</div>

			{isAssetsModalOpen && <Assets setIsAssetsModalOpen={setIsAssetsModalOpen}/>}

		</div>
	)
}

export default Overview;