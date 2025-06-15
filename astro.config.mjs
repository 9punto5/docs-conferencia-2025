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
					label: '🏠 Inicio',
					link: '/',
				},
				{
					label: '📊 Planificación General',
					items: [
						{ label: 'Dashboard', link: '/01-planificacion-general/dashboard/' },
						{ label: 'Visión de Áreas', link: '/01-planificacion-general/overview/' },
						{ label: 'Roadmap General', link: '/01-planificacion-general/roadmap/general/' },
					],
				},
				{
					label: '📝 Contenidos',
					items: [
						{ label: 'Planificación', link: '/02-contenidos/planificacion/' },
						{
							label: '👥 Roles de Participantes',
							items: [
								{ label: 'Facilitación', link: '/02-contenidos/roles-participantes/facilitacion/' },
								{ label: 'Speakers', link: '/02-contenidos/roles-participantes/speakers/' },
								{ label: 'Voluntarios', link: '/02-contenidos/roles-participantes/voluntarios/' },
								{ label: 'Workshops', link: '/02-contenidos/roles-participantes/workshops/' },
							],
						},
					],
				},
				{
					label: '🎬 Producción',
					items: [
						{ label: 'Planificación', link: '/03-produccion/planificacion/' },
					],
				},
				{
					label: '📢 Marketing',
					items: [
						{ label: 'Planificación', link: '/04-marketing/planificacion/' },
					],
				},
				{
					label: '💻 Tecnología',
					items: [
						{ label: 'Planificación', link: '/05-tecnologia/planificacion/' },
					],
				},
				{
					label: '🎪 Eventos',
					items: [
						{ label: 'Valdivia - Agenda General', link: '/07-eventos/valdivia/agenda-general/' },
					],
				},
			],
		}),
	],
});
