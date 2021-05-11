const colors = require('tailwindcss/colors')
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
			'ffs-2021': "#ff2021",
			white: colors.white,
			black: colors.black,
			gray: colors.trueGray,
		},
		fontFamily: {
			'sans': [...defaultConfig.theme.fontFamily.sans],
			'serif': ['Cambria', "Times New Roman", 'Times', 'serif'],
			// 'happy': ['HappyTimes', ...defaultConfig.theme.fontFamily.sans]
		},
		extend: {
			fontSize: {
				'2xs': ['.6rem', '.8rem']
			}
		},
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
