import Image from 'next/image'
import close from '@/app/assets/close.svg'

const Assets = ({ setIsAssetsModalOpen }) => {

const assetsHandler = (e) => {
	e.preventDefault()
	console.log('e.target.value')
}

const closeHandler = () => {
	setIsAssetsModalOpen(false)
}

	return (
		<div className="popup fixed top-0 left-0 z-[100] bg-black/50 w-full h-full">
			<div className="popup__content account absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-light text-light w-2/3 h-1/2 p-4 rounded-lg">
				<h3>Add/Remove Assets</h3>

				<button>
					<Image
						src={close}
						width={15}
						height={15}
						onClick={closeHandler}
						alt="Close popup"
					/>
				</button>

				<form>
					<label htmlFor="account">Enter Ethereum Address</label>
					<input 
						type="text" 
						name="account" 
						id="account"
						placeholder="0x0000000000000000000000000000000000000000"
					></input>
					<input 
						type="submit"
						className="bg-blue-500 text-light w-[125px] h-[40px] p-4 border-none rounded-md cursor-pointer transition-all duration-250 ease-in-out"
						onSubmit={assetsHandler}
					></input>
				</form>
			</div>
		</div>
	)
}

export default Assets;
