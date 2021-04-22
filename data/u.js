const slugify = require('../eleventy/functions/slugify')
const {dateFrom: parseDate, dateNow} = require('../eleventy/functions/date')

module.exports = () => ({
	parseDate, dateNow,
	slugify
})
