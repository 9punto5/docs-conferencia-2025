// Auto-generated Keystatic configuration
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: import.meta.env.MODE === 'production' ? 'github' : 'local',
    repo: import.meta.env.MODE === 'production' ? '9punto5/docs-conferencia-2025' : undefined,
  },
  collections: {
    'planificacion-general': collection({
      label: '📊 Planificación General',
      slugField: 'title',
      path: 'src/content/docs/01-planificacion-general/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Título' }),
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
    'contenidos': collection({
      label: '📝 Contenidos',
      slugField: 'title',
      path: 'src/content/docs/02-contenidos/**',
      format: { contentField: 'content', dataLocation: 'index' },
      schema: {
        title: fields.text({ label: 'Título' }),
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
    'produccion': collection({
      label: '🎬 Producción',
      slugField: 'title',
      path: 'src/content/docs/03-produccion/**',
      format: { contentField: 'content', dataLocation: 'index' },
      schema: {
        title: fields.text({ label: 'Título' }),
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
    'marketing': collection({
      label: '📢 Marketing',
      slugField: 'title',
      path: 'src/content/docs/04-marketing/**',
      format: { contentField: 'content', dataLocation: 'index' },
      schema: {
        title: fields.text({ label: 'Título' }),
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
    'tecnologia': collection({
      label: '💻 Tecnología',
      slugField: 'title',
      path: 'src/content/docs/05-tecnologia/**',
      format: { contentField: 'content', dataLocation: 'index' },
      schema: {
        title: fields.text({ label: 'Título' }),
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
      label: '🎪 Eventos',
      slugField: 'title',
      path: 'src/content/docs/07-eventos/**',
      format: { contentField: 'content', dataLocation: 'index' },
      schema: {
        title: fields.text({ label: 'Título' }),
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
