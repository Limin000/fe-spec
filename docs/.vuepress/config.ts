import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';

export default defineConfig4CustomTheme({
	locales: {
		'/': {
			lang: 'zh-CN',
			title: '编码规范',
			description: '前端编码规范工程化',
		},
	},
	base: '/fe-spec/',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/index.md' },
			{
				text: '编码规范',
				items: [
					{ text: 'HTML 编码规范', link: '/coding/html.md' },
				],
			},
		],
		sidebar: [
			{
				title: '编码规范',
				children: [
					{
						title: 'HTML 编码规范',
						path: '/coding/html.md',
					},
				],
			},
		],
		logo: '/img/logo.png',
		repo: 'Limin000/fe-spec',
		searchMaxSuggestions: 10,
		docsDir: 'docs',
		footer: {
			createYear: 2023,
			copyrightInfo:
				'encode studio | <a href="https://github.com/Limin000/fe-spec" target="_blank">github</a>',
		},

		extendFrontmatter: {
			author: {
				name: 'limin',
				link: 'https://github.com/Limin000/fe-sepc',
			},
		},
	},

	head: [
		['link', { rel: 'icon', href: '/img/logo.png' }],
		[
			'meta',
			{
				name: 'keywords',
				content: '前端编码规范工程化',
			},
		],
	],

	plugins: <UserPlugins>[
		[
			'one-click-copy',
			{
				copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
				copyMessage: '复制成功',
				duration: 1000,
				showInMobile: false,
			},
		],

		[
			'vuepress-plugin-zooming',
			{
				selector: '.theme-vdoing-content img:not(.no-zoom)',
				options: {
					bgColor: 'rgba(0,0,0,0.6)',
				},
			},
		],
	],
	extraWatchFiles: ['.vuepress/config.ts'],
});
