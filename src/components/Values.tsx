const Values = () => {
	return (
		<div className="values bg-secondary-light col-span-full row-start-2 my-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 grid-dense place-items-end items-center pb-8 transition-all duration-250 ease-in-out">
			<div className="bg-primary-light text-light w-full h-[250px] p-4 rounded-md relative">
				<h3 className="values__title">Portfolio Value</h3>
				<div className="values__chart">
				</div>
			</div>
		</div>
	)
}

export default Values;
