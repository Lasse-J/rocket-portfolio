import Image from 'next/image'
import close from '@/app/assets/close.svg'
import { Button } from '@/components/ui/button'

const Assets = ({ setIsAssetsModalOpen, markets, trackedAssets, setTrackedAssets }) => {

const assetsHandler = (e) => {
	e.preventDefault()
	setTrackedAssets([...trackedAssets, e.target.addAssets.value])
	console.log('Added asset', e.target.addAssets.value)
	setIsAssetsModalOpen(false)
}

const removeAssetsHandler = (e) => {
	e.preventDefault()
	const assetToRemove = e.target.removeAsset.value;
	setTrackedAssets(trackedAssets.filter((removeAsset) => removeAsset !== assetToRemove))
	console.log('Removed asset', assetToRemove)
	setIsAssetsModalOpen(false)
}

const closeHandler = () => {
	setIsAssetsModalOpen(false)
}

	return (
		<div className="popup fixed top-0 left-0 z-[100] bg-black/50 w-full h-full">
			<div className="popup__content assets absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-light text-light dark:bg-secondary-dark dark:text-white w-[30%] h-[25%] p-4 rounded-lg">
				<h3 className="dark:text-black">Select Asset</h3>
				<br />

				<div className="absolute top-[10%] left-[95%] transform -translate-x-1/2 -translate-y-1/2">
					<button>
						<Image
							src={close}
							width={25}
							height={25}
							onClick={closeHandler}
							alt="Close popup"
						/>
					</button>
				</div>

				<form onSubmit={assetsHandler}>
					<select name="addAssets" id="addAssets" className="h-10 px-4 py-2 border-none rounded-md font-josefin font-semibold mb-4">
						{markets && (
							markets.map((market, index) => (
								<option key={index} value={market.id}>{market.symbol.toUpperCase()}</option>
							))
						)}
					</select>
					<br />
					<Button placeholder="Add">
						<input type="submit" />
					</Button>
				</form>

			</div>
		</div>
	)
}

export default Assets;
