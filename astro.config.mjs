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
						{
							label: 'Roadmap detallado',
							items: [
								{ label: 'Overview', link: '/planificacion/roadmap-detallado/overview' },
								{ label: 'Junio', link: '/planificacion/roadmap-detallado/junio' },
								{ label: 'Julio', link: '/planificacion/roadmap-detallado/julio' },
								{ label: 'Agosto', link: '/planificacion/roadmap-detallado/agosto' },
								{ label: 'Septiembre', link: '/planificacion/roadmap-detallado/septiembre' },
								{ label: 'Octubre', link: '/planificacion/roadmap-detallado/octubre' },
								{ label: 'Noviembre', link: '/planificacion/roadmap-detallado/noviembre' },
							],
						},
					],
				},
				{
					label: 'Áreas',
					items: [
						{
							label: 'Contenidos',
							items: [
								{ label: 'Overview', link: '/areas/contenidos/overview' },
								{ label: 'Programa', link: '/areas/contenidos/programa' },
								{
									label: 'Roles',
									items: [
										{ label: 'Speakers', link: '/areas/contenidos/roles/speakers' },
										{ label: 'Talleristas', link: '/areas/contenidos/roles/talleristas' },
										{ label: 'Panelistas', link: '/areas/contenidos/roles/panelistas' },
									],
								},
							],
						},
						{
							label: 'Experiencia y producción',
							items: [
								{ label: 'Overview', link: '/areas/experiencia-produccion/overview' },
								{
									label: 'Equipo',
									items: [
										{ label: 'Facilitación', link: '/areas/experiencia-produccion/roles/facilitacion' },
										{ label: 'Operación', link: '/areas/experiencia-produccion/roles/operacion' },
									],
								},
							],
						},
						{
							label: 'Marketing y diseño',
							items: [
								{ label: 'Overview', link: '/areas/marketing-diseno/overview' },
							],
						},
						{
							label: 'Tecnología',
							items: [
								{ label: 'Overview', link: '/areas/tecnologia/overview' },
							],
						},
						{
							label: 'Finanzas',
							items: [
								{ label: 'Overview', link: '/areas/finanzas/overview' },
								{ label: 'Presupuesto', link: '/areas/finanzas/presupuesto' },
								{ label: 'Sponsors', link: '/areas/finanzas/sponsors' },
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
								{ label: 'Overview', link: '/eventos/valdivia/overview' },
								{
									label: 'Agenda',
									items: [
										{ label: 'Jueves 06', link: '/eventos/valdivia/agenda/jueves-06' },
										{ label: 'Viernes 07', link: '/eventos/valdivia/agenda/viernes-07' },
										{ label: 'Sábado 08', link: '/eventos/valdivia/agenda/sabado-08' },
									],
								},
							],
						},
					],
				},
				{
					label: 'Recursos',
					items: [
						{ label: 'Overview', link: '/recursos/overview' },
						{ label: 'Guías', link: '/recursos/guias/overview' },
						{ label: 'Operativo', link: '/recursos/operativo/overview' },
						{ label: 'Templates', link: '/recursos/templates/overview' },
					],
				},
			],
		}),
	],
});
