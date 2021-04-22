const {DateTime} = require('luxon')

function dateFrom(dateString, format = null) {
	return DateTime.fromFormat(
		dateString,
		format === 'time'
			? 'd.M.y h:mm'
			: (format || 'd.M.y')
	)
}

function dateNow() {
	return DateTime.local()
}

function dateFormat (value, format = 'dd.MM.yyyy', locale = 'sk') {
	return value.toFormat(format, {locale})
}

module.exports = {
	dateFrom, dateNow, dateFormat
}
