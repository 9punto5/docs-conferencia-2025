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
						{ label: 'Roadmap general', link: '/planificacion/roadmap' },
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
							label: 'Coordinación',
							items: [
								{ label: 'Overview', link: '/areas/coordinacion/overview' },
							],
						},
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
							label: 'Experiencia',
							items: [
								{ label: 'Overview', link: '/areas/experiencia/overview' },
								{
									label: 'Equipo',
									items: [
										{ label: 'Facilitación', link: '/areas/experiencia/roles/facilitacion' },
										{ label: 'Equipo voluntario', link: '/areas/experiencia/roles/equipo-voluntario' },
									],
								},
							],
						},
						{
							label: 'Producción',
							items: [
								{ label: 'Overview', link: '/areas/experiencia-produccion/overview' },
								{ label: 'Requerimientos de experiencia', link: '/areas/experiencia-produccion/requerimientos-experiencia' },
								{ label: 'Listado de lugares posibles', link: '/areas/experiencia-produccion/listado-lugares' },
							],
						},
						{
							label: 'Marketing y diseño',
							items: [
								{ label: 'Overview', link: '/areas/marketing-diseno/overview' },
								{ label: 'Lineamientos CORFO', link: '/areas/marketing-diseno/lineamientos-corfo' },
								{ label: 'Sponsorship', link: '/areas/marketing-diseno/sponsorship/overview' },
							],
						},
						{
							label: 'Tecnología y UX',
							items: [
								{ label: 'Overview', link: '/areas/tecnologia/overview' },
							],
						},
						{
							label: 'Finanzas',
							items: [
								{ label: 'Overview', link: '/areas/finanzas/overview' },
								{ label: 'Presupuesto', link: '/areas/finanzas/presupuesto' },
							],
						},
					],
				},
				{
					label: 'Eventos',
					items: [
						{ label: 'Overview', link: '/eventos/overview' },
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
						{ label: 'Paillaco', link: '/eventos/paillaco/overview' },
						{ label: 'Santiago', link: '/eventos/santiago-prep/overview' },
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
