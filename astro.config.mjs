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
						{ label: 'General', slug: 'roadmap/general' },
					],
				},
				{
					label: 'Áreas',
					items: [
						{ label: 'Visión General', slug: 'areas/overview' },
						{ label: 'Contenidos', slug: 'contenidos/planificacion' },
						{ label: 'Producción', slug: 'produccion/planificacion' },
						{ label: 'Marketing', slug: 'marketing/planificacion' },
						{ label: 'Tecnología', slug: 'tecnologia/planificacion' },
					],
				},
			],
			defaultLocale: 'es',
			locales: {
				es: {
					label: 'Español',
				},
			},
		}),
	],
});
