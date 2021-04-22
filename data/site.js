const site = {
	meta: {
		title: 'adamkiss.com',
		description: 'adamkiss.com is a website.',
		robots: 'noindex,nofollow'
	},
	runtime: {
		isProduction: () => process.env.NODE_ENV === 'production',
		isNotProduction: () => process.env.NODE_ENV !== 'production'
	},
}

module.exports = _ => site
