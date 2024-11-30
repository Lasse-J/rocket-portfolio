import { HomeIcon, ChartCandlestick, BriefcaseBusiness } from 'lucide-react'
import Link from 'next/link'

import NavButton from '@/components/NavButton'
import { ModeToggle } from '@/components/ModeToggle'
import { CurrencyToggle } from '@/components/CurrencyToggle'

const Navbar = () => {
	return (
	 	<header className="animate-slide h-12 p-2 border-b sticky top-0 z-20">
	 		<div className="flex h-8 items-center justify-between w-full">
	 			<div className="flex items-center gap-2">
	 				<NavButton href="/" label="Home" icon={HomeIcon} />
	 					<Link href="/" className="flex justify-center items-center gap-2 ml-0 mt-1" title="Home">
	 					</Link>
					<h1 className="">
						Rocket Portfolio
					</h1>
	 			</div>

	 			<div className="flex items-center">
	 				<nav>
	 					<CurrencyToggle />

		 				<NavButton href="/markets" label="Markets" icon={ChartCandlestick} />

		 				<NavButton href="/portfolio" label="Portfolio" icon={BriefcaseBusiness} />

		 				<ModeToggle />
	 				</nav>
		 		</div>
	 		</div>
	 	</header>
	)
}

export default Navbar;
