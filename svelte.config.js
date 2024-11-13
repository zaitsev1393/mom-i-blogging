import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';

import { mdsvex, escapeSvelte } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['poimandres'],
				langs: ['javascript', 'typescript']
			});
			await highlighter.loadLanguage('javascript', 'typescript');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	onwarn: (warning, handler) => {
		if (warning.code === 'css-unused-selector') {
			return;
		}
		handler(warning);
	},
	kit: {
		adapter: adapter()
	}
};

export default config;
