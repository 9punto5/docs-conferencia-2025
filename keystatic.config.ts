import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: '9punto5/docs-conferencia-2025',
  },
  collections: {
    'planificacion-general': collection({
      label: '📊 Planificación General',
      slugField: 'title',
      path: 'src/content/docs/01-planificacion-general/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ 
          label: 'Título',
        }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.document({
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    'contenidos': collection({
      label: '📝 Contenidos',
      slugField: 'title',
      path: 'src/content/docs/02-contenidos/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.document({
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    'roles-participantes': collection({
      label: '👥 Roles de Participantes',
      slugField: 'title',
      path: 'src/content/docs/02-contenidos/roles-participantes/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.document({
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    'produccion': collection({
      label: '🎬 Producción',
      slugField: 'title',
      path: 'src/content/docs/03-produccion/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.document({
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    'marketing': collection({
      label: '📢 Marketing',
      slugField: 'title',
      path: 'src/content/docs/04-marketing/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.document({
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    'tecnologia': collection({
      label: '💻 Tecnología',
      slugField: 'title',
      path: 'src/content/docs/05-tecnologia/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.document({
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    'sponsor': collection({
      label: '🤝 Sponsor',
      slugField: 'title',
      path: 'src/content/docs/06-sponsor/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.document({
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    'financiero': collection({
      label: '💰 Financiero',
      slugField: 'title',
      path: 'src/content/docs/06-financiero/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.document({
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    'evento-valdivia': collection({
      label: '⭐ Evento Valdivia',
      slugField: 'title',
      path: 'src/content/docs/07-eventos/valdivia/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.document({
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    'recursos': collection({
      label: '📚 Recursos',
      slugField: 'title',
      path: 'src/content/docs/08-recursos/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.document({
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});