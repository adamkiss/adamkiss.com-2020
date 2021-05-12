const {readFileSync} = require('fs')
const parse = require('csv-parse/lib/sync')

module.exports = parse(
	readFileSync(`${__dirname}/work.csv`),
	{
		columns: true,
		skipEmptyLines: true,
		trim: true,
	}
)
