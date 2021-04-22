const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
	mode: 'jit',
	theme: {
		screens: {
			'xs': '400px',
			...defaultConfig.theme.screens
		},
		extend: {
			fontFamily: {
				'demo': ['demo', ...defaultConfig.theme.fontFamily.sans]
			}
		}
	},
	variants: {},
	plugins: [],
	corePlugins: {
		container: false,
	},
	purge: {
		content: [
			'./site/**/*.{njk,pug,md,html}',
			'./partials/**/*.{njk,pug,md,html}',
			'./assets/**/*.js'
		],
		options: {
			safelist: [/^styled-html/]
		}
	}
}
