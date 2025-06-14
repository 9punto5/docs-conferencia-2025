// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://tu-dominio.pages.dev', // Reemplaza con tu dominio de Cloudflare Pages
	integrations: [
		starlight({
			title: 'Conferencia 2025',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/9punto5/docs-conferencia-2025' }
			],
			sidebar: [
				{
					label: 'Inicio',
					link: '/',
				},
				{
					label: 'Roadmap',
					items: [
						{ label: 'General', link: '/roadmap/general/' },
					],
				},
				{
					label: 'Áreas',
					items: [
						{ label: 'Visión General', link: '/areas/overview/' },
						{ label: 'Contenidos', link: '/contenidos/planificacion/' },
						{ label: 'Producción', link: '/produccion/planificacion/' },
						{ label: 'Marketing', link: '/marketing/planificacion/' },
						{ label: 'Tecnología', link: '/tecnologia/planificacion/' },
					],
				},
			],
		}),
	],
});
