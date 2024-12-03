import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "Perdition Portfolio",
	cleanUrls: true,

	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'COM3D2', link: '/com3d2' },
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/Perdition-117' },
		],
	},
})
