import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: '9punto5/docs-conferencia-2025',
  },
  collections: {
    'roles-participantes': collection({
      label: '👥 Roles de Participantes',
      slugField: 'title',
      path: 'src/content/docs/02-contenidos/roles-participantes/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Título' }),
        description: fields.text({ 
          label: 'Descripción',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
        }),
      },
    }),
  },
});