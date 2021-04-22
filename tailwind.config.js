const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
	mode: 'jit',
	darkMode: 'media',
	theme: {
		screens: {
			'xs': '400px',
			...defaultConfig.theme.screens
		},
		colors: {
			'almost' : {
				'white': "#dedede",
				'black': "#202122"
			},
			'ffs-2021': "#ff2021"
		},
		fontFamily: {
			'sans': [...defaultConfig.theme.fontFamily.sans],
			'happy': ['HappyTimes', ...defaultConfig.theme.fontFamily.sans]
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
