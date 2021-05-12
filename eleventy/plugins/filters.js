module.exports = ec => {
	/**
	 * {{ variable | or(potential.variable, variable2, whatever, 'finally) }}
	 * Multilevel "default(value, default, falsy? = false)" fallback filter
	 * skips all "undefined", null, false, '' values and returns first other
	 */
	ec.addFilter('or', function() {
		return [...arguments].filter(a => a).shift()
	})

	ec.addFilter('nbsp', str => str.replace(' ', ' '))
}
