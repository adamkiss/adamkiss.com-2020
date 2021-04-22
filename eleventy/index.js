const {join} = require('path')
const pkg = require('../package')

const pluginMarkdown = require('./plugins/markdown')
const pluginDate = require('./plugins/date')
const pluginFilters = require('./plugins/filters')

module.exports = ec => {
	ec.setUseGitIgnore(false)
	ec.setWatchThrottleWaitTime(100)

	ec.addPlugin(pluginMarkdown)
	ec.addPlugin(pluginDate)
	ec.addPlugin(pluginFilters)

	// Images, Fonts & Vendored stuff passthrough
	ec.addPassthroughCopy('assets/**/*.(jpg|png|svg|jpeg)')
	ec.addPassthroughCopy('assets/**/*.(woff|woff2)')
	ec.addPassthroughCopy('assets/vendor/*.*')
	// Non-template files passthrough (favicon, downloads, etc.)
	ec.addPassthroughCopy('site/**/*.!(njk|pug|md)')

	ec.setBrowserSyncConfig({
		port: 3000
	})

	return {
		htmlTemplateEngine: false,
		dataTemplateEngine: false,
		markdownTemplateEngine: 'njk',
		passthroughFileCopy: true,

		dir: {
			input: 'site', // relative to where the cwd is
				data: '../data', // relative to dir.input
				includes: '../partials', // relative to dir.input
				layouts: '../partials', // relative to dir.input
			output: pkg.config.dir // relative to where the cwd is
		}
	}
}
