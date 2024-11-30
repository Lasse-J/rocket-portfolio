import { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'

const Holdings = ({ assets }) => {
	const defaultSymbols = ["--", "--", "--", "--", "--"]
	const defaultValues = [1, 2, 3, 4, 5]

	const [symbols, setSymbols] = useState(null)
	const [values, setValues] = useState(null)

	const calculateValue = () => {
		let syms = []
		let vals = []

		for (var i = 0; i < assets.length; i++) {
			syms.push(assets[i].market.symbol.toUpperCase())
			vals.push(assets[i].value)
		}

		setSymbols(syms)
		setValues(vals)
	}

	useEffect(() => {
		if (assets.length === 0) {
			setSymbols(null)
		} else {
			calculateValue()
		}
	}, [assets])

	return (
		<div className="holdings bg-secondary-light col-span-full row-start-2 my-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 grid-dense place-items-end items-center pb-8 transition-all duration-250 ease-in-out">
			<div className="bg-primary-light text-light w-full h-[400px] p-4 rounded-md relative">
				<h3 className="holdings__title">Holdings</h3>
				<div className="holdings__chart place-items-center">

					<Chart
						options={{
							labels: symbols ? symbols : defaultSymbols,
							legend: {
								position: 'left',
								horizontalAlign: 'center',
								labels: {
									colors: '#000000'
								}
							}
						}}
						series={values ? values : defaultValues}
						type="pie"
						height={300}
					/>

				</div>
			</div>
		</div>
	)
}

export default Holdings;