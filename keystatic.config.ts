// Auto-generated Keystatic configuration
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: import.meta.env.MODE === 'production' 
    ? {
        kind: 'github',
        repo: {
          owner: '9punto5',
          name: 'docs-conferencia-2025',
        },
      }
    : {
        kind: 'local',
      },
  collections: {
    'planificacion': collection({
      label: 'Planificación',
      slugField: 'title',
      path: 'src/content/docs/planificacion/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
          extension: 'md'
        }),
      },
    }),
    'areas-contenidos': collection({
      label: 'Áreas - Contenidos',
      slugField: 'title',
      path: 'src/content/docs/areas/contenidos/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
          extension: 'md'
        }),
      },
    }),
    'areas-produccion': collection({
      label: 'Áreas - Producción',
      slugField: 'title',
      path: 'src/content/docs/areas/produccion/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
          extension: 'md'
        }),
      },
    }),
    'areas-marketing-diseno': collection({
      label: 'Áreas - Marketing y diseño',
      slugField: 'title',
      path: 'src/content/docs/areas/marketing-diseno/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
          extension: 'md'
        }),
      },
    }),
    'areas-tecnologia': collection({
      label: 'Áreas - Tecnología y UX',
      slugField: 'title',
      path: 'src/content/docs/areas/tecnologia/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
          extension: 'md'
        }),
      },
    }),
    'areas-finanzas': collection({
      label: 'Áreas - Finanzas',
      slugField: 'title',
      path: 'src/content/docs/areas/finanzas/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
          extension: 'md'
        }),
      },
    }),
    'areas-experiencia': collection({
      label: 'Áreas - Experiencia',
      slugField: 'title',
      path: 'src/content/docs/areas/experiencia/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
          extension: 'md'
        }),
      },
    }),
    'areas-coordinacion': collection({
      label: 'Áreas - Coordinación',
      slugField: 'title',
      path: 'src/content/docs/areas/coordinacion/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
          extension: 'md'
        }),
      },
    }),
    'areas-producto': collection({
      label: 'Áreas - Producto',
      slugField: 'title',
      path: 'src/content/docs/areas/producto/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
          extension: 'md'
        }),
      },
    }),
    'eventos': collection({
      label: 'Eventos',
      slugField: 'title',
      path: 'src/content/docs/eventos/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
          extension: 'md'
        }),
      },
    }),
    'recursos': collection({
      label: 'Recursos',
      slugField: 'title',
      path: 'src/content/docs/recursos/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
          extension: 'md'
        }),
      },
    })
  },
});
