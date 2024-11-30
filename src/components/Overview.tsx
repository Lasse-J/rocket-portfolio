import { useState, useEffect } from 'react'

import Image from 'next/image'

// Components
import Assets from '@/components/Assets'
import Remove from '@/components/Remove'

// Images
import add from '@/app/assets/add.svg'
import minus from '@/app/assets/minus.svg'
import up from '@/app/assets/up.svg'
import down from '@/app/assets/down.svg'

const Overview = ({ markets, trackedAssets, setTrackedAssets, assets, setAssets }) => {
	const [value, setValue] = useState(0)
	const [percentageChange, setPercentageChange] = useState(0)

	const [isAssetsModalOpen, setIsAssetsModalOpen] = useState(false)
	const [isRemoveAssetsModalOpen, setIsRemoveAssetsModalOpen] = useState(false)

	const assetsModalHandler = () => {
		setIsAssetsModalOpen(true)
	}

	const removeAssetsModalHandler = () => {
		setIsRemoveAssetsModalOpen(true)
	}

	const calculateValue = () => {
		let total = 0

		for(var i = 0; i < assets.length; i++) {
			if(assets[i].balance === 0) { continue }
			total += assets[i].value
		}

		setValue(total)
	}

	const calculatePercentageChange = () => {
		let total = 0

		for(var i = 0; i < assets.length; i++) {
			if(assets[i].balance === 0) { continue }
			
			// Get past & current values
			console.log(assets[i])

			const pastValue = (assets[i].market.current_price - assets[i].market.price_change_24h) * assets[i].balance
			const currentValue = assets[i].value
			const change = ((currentValue - pastValue) / pastValue) * 100

			total += change
		}

		setPercentageChange(total)
	}

	useEffect(() => {
		if (assets.length === 0) {
			setValue(0)
			setPercentageChange(0)
		} else {
			calculateValue()
			calculatePercentageChange()
		}
	})

	return(
		<div className="overview bg-secondary-light col-span-full row-start-2 my-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 grid-dense place-items-end items-center pb-8 transition-all duration-250 ease-in-out">
			<div className="overview__tracked bg-primary-light text-light w-full h-[125px] p-4 rounded-md relative">
				<h3>Selected Assets</h3>
					<div className="absolute top-[50%] left-[10%] transform -translate-x-1/2 -translate-y-1/2">
						<button onClick={removeAssetsModalHandler}>
							<Image
								src={minus}
								width={25}
								height={25}
								alt="Remove asset"
							/>
						</button>
					</div>
				<p>{assets.length}</p>
				<div className="absolute top-[50%] left-[90%] transform -translate-x-1/2 -translate-y-1/2">
					<button onClick={assetsModalHandler}>
						<Image
							src={add}
							width={25}
							height={25}
							alt="Add asset"
						/>
					</button>
				</div>
			</div>
			<div className="overview__total bg-primary-light text-light w-full h-[125px] p-4 rounded-md relative">
				<h3>Total Value</h3>
				<p>{value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
			</div>
			<div className="overview__change bg-primary-light text-light w-full h-[125px] p-4 rounded-md relative">
				<h3>24h Change</h3>
				<span className={percentageChange < 0 ? "text-red-500" : "text-green-500"}>{percentageChange.toFixed(2)}%
					<div className="absolute top-[50%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">
						<Image
							src={percentageChange < 0 ? down : up}
							width={20}
							height={20}
							alt="Change direction"
						/>
					</div>
				</span>
			</div>

			{isAssetsModalOpen && 
				<Assets 
					setIsAssetsModalOpen={setIsAssetsModalOpen}
					markets={markets}
					trackedAssets={trackedAssets}
					setTrackedAssets={setTrackedAssets}
				/>
			}

			{isRemoveAssetsModalOpen && 
				<Remove 
					setIsRemoveAssetsModalOpen={setIsRemoveAssetsModalOpen}
					markets={markets}
					trackedAssets={trackedAssets}
					setTrackedAssets={setTrackedAssets}
					assets={assets}
					setAssets={setAssets}
				/>
			}

		</div>
	)
}

export default Overview;