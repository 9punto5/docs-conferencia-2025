// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.9punto5.cl', // También funciona en Netlify gratis
	output: 'server',
	adapter: netlify(),
	integrations: [
		react(),
		keystatic(),
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
					label: 'Planificación General',
					items: [
						{ label: 'Overview', link: '/planificacion/overview' },
						{ label: 'Dashboard', link: '/planificacion/dashboard' },
						{ label: 'Roadmap', link: '/planificacion/roadmap' },
					],
				},
				{
					label: 'Roadmap',
					items: [
						{ label: 'Junio', link: '/roadmap/junio' },
						{ label: 'Julio', link: '/roadmap/julio' },
						{ label: 'Agosto', link: '/roadmap/agosto' },
						{ label: 'Septiembre', link: '/roadmap/septiembre' },
						{ label: 'Octubre', link: '/roadmap/octubre' },
						{ label: 'Noviembre', link: '/roadmap/noviembre' },
					],
				},
				{
					label: 'Contenidos de la Conferencia',
					items: [
						{ label: 'Overview', link: '/contenidos/overview' },
						{
							label: 'Roles de Participantes',
							items: [
								{ label: 'Facilitadores', link: '/contenidos/roles/facilitadores' },
								{ label: 'Speakers', link: '/contenidos/roles/speakers' },
								{ label: 'Voluntarios', link: '/contenidos/roles/voluntarios' },
								{ label: 'Workshops', link: '/contenidos/roles/workshops' },
							],
						},
					],
				},
				{
					label: 'Producción',
					items: [
						{ label: 'Overview', link: '/produccion/overview' },
					],
				},
				{
					label: 'Marketing y Diseño',
					items: [
						{ label: 'Overview', link: '/marketing/overview' },
					],
				},
				{
					label: 'Tecnología y UX',
					items: [
						{ label: 'Overview', link: '/tecnologia/overview' },
					],
				},
				{
					label: 'Eventos',
					items: [
						{
							label: 'Valdivia',
							items: [
								{ label: 'Agenda', link: '/eventos/valdivia/agenda' },
							],
						},
					],
				},
			],
		}),
	],
});
