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
					label: 'Planificación',
					items: [
						{ label: 'Overview', link: '/planificacion/overview' },
						{ label: 'Dashboard', link: '/planificacion/dashboard' },
						{ label: 'Roadmap', link: '/planificacion/roadmap' },
						{ label: 'Junio', link: '/planificacion/junio' },
						{ label: 'Julio', link: '/planificacion/julio' },
						{ label: 'Agosto', link: '/planificacion/agosto' },
						{ label: 'Septiembre', link: '/planificacion/septiembre' },
						{ label: 'Octubre', link: '/planificacion/octubre' },
						{ label: 'Noviembre', link: '/planificacion/noviembre' },
					],
				},
				{
					label: 'Áreas',
					items: [
						{
							label: 'Contenidos',
							items: [
								{ label: 'Overview', link: '/areas/contenidos/overview' },
								{
									label: 'Roles de Participantes',
									items: [
										{ label: 'Speakers', link: '/areas/contenidos/roles/speakers' },
										{ label: 'Workshops', link: '/areas/contenidos/roles/workshops' },
									],
								},
							],
						},
						{
							label: 'Experiencia y producción',
							items: [
								{ label: 'Overview', link: '/areas/produccion/overview' },
								{
									label: 'Equipo',
									items: [
										{ label: 'Facilitación', link: '/areas/produccion/equipo/facilitacion' },
										{ label: 'Operación', link: '/areas/produccion/equipo/operacion' },
									],
								},
							],
						},
						{
							label: 'Marketing',
							items: [
								{ label: 'Overview', link: '/areas/marketing/overview' },
							],
						},
						{
							label: 'Tecnología',
							items: [
								{ label: 'Overview', link: '/areas/tecnologia/overview' },
							],
						},
						{
							label: 'Financiero',
							items: [
								{ label: 'Presupuesto', link: '/areas/financiero/presupuesto' },
								{ label: 'Sponsors', link: '/areas/financiero/sponsors' },
							],
						},
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
				{
					label: 'Recursos',
					items: [
						{ label: 'Guías', link: '/recursos/guias' },
						{ label: 'Operativo', link: '/recursos/operativo' },
						{ label: 'Templates', link: '/recursos/templates' },
					],
				},
			],
		}),
	],
});
