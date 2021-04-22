const {dateFrom, dateFormat} = require('../functions/date')

module.exports = ec => {
	ec.addFilter('date', dateFrom)
	ec.addFilter('format', dateFormat)
}
