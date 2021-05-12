const slugify = require('../eleventy/functions/slugify')
const {dateFrom: parseDate, dateNow} = require('../eleventy/functions/date')

let yearCache = null;
const yearHeader = (year, output) => {
	if (yearCache === year) return '';

	yearCache = year
	return output.replace('YYYY', year)
}

module.exports = () => ({
	parseDate, dateNow,
	slugify, yearHeader
})
