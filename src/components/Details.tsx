import Image from 'next/image'
import close from '@/app/assets/close.svg'
import up from '@/app/assets/up.svg'
import down from '@/app/assets/down.svg'

const Details = ({ isDetailsModalOpen, setIsDetailsModalOpen, asset }) => {
	const closeHandler = () => {
		setIsDetailsModalOpen(false)
	}

	return (
		<div className="popup fixed top-0 left-0 z-[100] bg-black/50 w-full h-full">
			<div className="popup__content details absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-light text-light dark:bg-secondary-dark dark:text-white w-[80%] h-[30%] p-4 rounded-lg">

				{console.log('Asset in Details:', asset)}

				<div className="details__title">
					<Image 
						src={asset.market.image}
						width={40}
						height={40}
						alt='Asset image'
					/>
					<h3>{asset.market.name}<small> ({asset.market.symbol.toUpperCase()})</small></h3>
				</div>
				
				<hr />

				<div className="asset__price">
					<p>
						{asset.market.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}

						<small>
							<Image 
								src={asset.market.price_change_percentage_24h < 0 ? down : up}
								width={20}
								height={20}
								alt="Change direction"
							/>
							<span className={asset.market.price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"}>
								{asset.market.price_change_percentage_24h.toFixed(2)}%
							</span>
						</small>

					</p>
				</div>

				<hr />

				<div className="asset__details">
					<div><h4>All Time High</h4><p>{asset.market.ath.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p></div>
					<div><h4>From ATH</h4><p>{asset.market.ath_change_percentage.toFixed(2)}%</p></div>
					<div><h4>Market Cap</h4><p>{asset.market.market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p></div>
					<div><h4>Circulating Supply</h4><p>{asset.market.circulating_supply.toLocaleString('en-US')}</p></div>
					<div><h4>Total Supply</h4><p>{asset.market.total_supply.toLocaleString('en-US')}</p></div>
					<div><h4>MCap / FDV</h4><p>{(asset.market.market_cap / asset.market.fully_diluted_valuation).toFixed(2)}</p></div>
				</div>

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
			</div>
		</div>
	)
}

export default Details;