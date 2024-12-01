import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import minus from '@/app/assets/minus.svg'
import Details from '@/components/Details'

const List = ({ assets, setAssets, setTrackedAssets }) => {
	const [asset, setAsset] = useState(false)
	const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)

	const detailsModalHandler = (asset) => {
		setIsDetailsModalOpen(true)
		setAsset(asset)
	}

	const removeHandler = (asset) => {
		if (assets.length === 1) {
			setAssets([])
		} else {
			const index = assets.indexOf(assets.find((a) => a.id === asset.id))
			const assetsArr = assets.slice()
			assetsArr.splice(index, 1)
			setAssets(assetsArr)

			// Save assets to localStorage
    	localStorage.setItem('assets', JSON.stringify(assetsArr));
		}
	}

	return (
		<div className="list bg-secondary-light col-span-full row-start-3 overflow-auto row-start-2 my-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 grid-dense place-items-end items-center pb-8 transition-all duration-250 ease-in-out">
			<div className="bg-primary-light text-light w-full h-full p-4 rounded-md relative">
			<h3>Assets List</h3>
			<table className="border-b text-light border-collapse p-4 text-left w-full mt-1">
				<thead>
					<tr className="border-b text-light border-collapse p-4 text-left">
						<th></th>
						<th>Asset</th>
						<th>Symbol</th>
						<th>Price</th>
						<th>Holdings</th>
						<th>Total Value</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{assets.map((asset, index) => (
					<tr key={index} className="border-b text-light border-collapse p-4 text-left">
						<td>
							<Image 
								src={asset.market.image}
								width={25}
								height={25}
								alt='Asset image'
							/>
						</td>
						<td>{asset.market.name}</td>
						<td>{asset.market.symbol.toUpperCase()}</td>
						<td>{asset.market.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
						<td>{asset.balance}</td>
						<td>{asset.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
						<td><Button onClick={() => detailsModalHandler(asset)}>Details</Button></td>
						<td>
							<button className="remove" onClick={() => removeHandler(asset)}>
								<Image
									src={minus}
									width={20}
									height={20}
									alt="Remove asset"
								/>
							</button>
						</td>
					</tr>
					))}
				</tbody>
			</table>

			{isDetailsModalOpen && 
				<Details 
					isDetailsModalOpen={isDetailsModalOpen}
					setIsDetailsModalOpen={setIsDetailsModalOpen}
					asset={asset}
				/>
			}

			</div>
		</div>
	)
}

export default List;
