const site = {
	meta: {
		title: 'Adam Kiss',
		description: 'Design for developers. Development for designers. Brand & Marketing for Small Businesses.'
	},
	runtime: {
		isProduction: () => process.env.NODE_ENV === 'production',
		isNotProduction: () => process.env.NODE_ENV !== 'production'
	},
}

module.exports = _ => site
