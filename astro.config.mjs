// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.9punto5.cl', // También funciona en Netlify gratis
	integrations: [
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
						{ label: 'Roadmap General', link: '/01-planificacion-general/roadmap/general/' },
						{ label: 'Visión de Áreas', link: '/01-planificacion-general/overview/' },
					],
				},
				{
					label: '📝 Contenidos',
					items: [
						{ label: 'Planificación', link: '/02-contenidos/planificacion/' },
						{ label: 'Speakers', link: '/02-contenidos/roles-participantes/speakers/' },
						{ label: 'Workshops', link: '/02-contenidos/roles-participantes/workshops/' },
						{ label: 'Facilitación', link: '/02-contenidos/roles-participantes/facilitacion/' },
						{ label: 'Voluntarios', link: '/02-contenidos/roles-participantes/voluntarios/' },
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
						{ label: '⭐ Valdivia (Principal)', link: '/07-eventos/valdivia/agenda-general/' },
						{ label: 'Paillaco', link: '/07-eventos/paillaco/' },
						{ label: 'Santiago Prep', link: '/07-eventos/santiago-prep/' },
					],
				},
			],
		}),
	],
});
