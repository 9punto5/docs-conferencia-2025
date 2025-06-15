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
    'roadmap': collection({
      label: 'Roadmap',
      slugField: 'title',
      path: 'src/content/docs/roadmap/*',
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
    'marketing-diseno': collection({
      label: 'Marketing y diseño',
      slugField: 'title',
      path: 'src/content/docs/marketing-diseno/**',
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
    'contenidos-conferencia': collection({
      label: 'Contenidos de la conferencia',
      slugField: 'title',
      path: 'src/content/docs/contenidos-conferencia/**',
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
    'experiencia-produccion': collection({
      label: 'Experiencia y producción',
      slugField: 'title',
      path: 'src/content/docs/experiencia-produccion/**',
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
    'tecnologia-ux': collection({
      label: 'Tecnología y UX',
      slugField: 'title',
      path: 'src/content/docs/tecnologia-ux/**',
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
    'finanzas': collection({
      label: 'Finanzas',
      slugField: 'title',
      path: 'src/content/docs/finanzas/**',
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
