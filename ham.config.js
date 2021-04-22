module.exports = {
	directory: 'site/assets/dist',
	manifest: 'data/assets.js',
	template: files => (`module.exports = _ => file => {
	const list = ['${Object.keys(files).join(`','`)}']
	const files = {
		${Object.keys(files).map(k => `'${k}': '${files[k]}'`).join(`,
		`)}
	}

	return Object.keys(files).includes(file) ? ${'`dist/${files[file]}`'} : ${'`dev/${file}`'}
}`)
}
