const { join } = require('path')

module.exports = (ec, opts) => {
	ec.addCollection('phpFiles', (collection, options) => {
		// get all applicable files
		const phpFiles = collection.getFilteredByGlob('**/**.php.**')

		if (!phpFiles.length) return phpFiles

		const outputDir = join('.', phpFiles[0].template._config.dir.output)

		return phpFiles.map(item => {
			const url = item.filePathStem.replace(/(?:\/index)?\.php/, '/')
			const permalink = `${url}index.php`
			const outputPath = join(outputDir, permalink)

			Object.assign(item.data.page, { url, permalink, outputPath })
			Object.assign(item, { url, permalink, outputPath })
			return item
		})
	})

	ec.addTransform('transformFakeHtmlTags', (content, path) => {
		if (path.endsWith('.php')) {
			content = content
				.replace(/<php>/gi, '<?php ')
				.replace(/<\/php>/gi, ' ?>')
				.replace(/<echo>/gi, '<?=')
				.replace(/<\/echo>/gi, '?>')
		}

		return content
	})

	ec.addFilter('php', value => `<php>${value}</php>`)
	ec.addShortcode('echo', (...args) => args.map(a => `<echo>${a}</echo>`).join(''))
	ec.addPairedShortcode('php', content => `<php>${content}</php>`)

	ec.setBrowserSyncConfig({
		proxy: process.env.npm_package_config_host,
		server: false,
		snippetOptions: {
			rule: {
				match: /<\/head>/i,
				fn: function (snippet, match) {
					return snippet + match;
				}
			}
		}
	})
}
