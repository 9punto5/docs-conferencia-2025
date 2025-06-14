# Configuración del Proyecto - Conferencia 2025

## 🚀 Setup inicial

### 1. Clonar y configurar
```bash
git clone <tu-repo>
cd docs-cms
npm install
```

### 2. Configurar GitHub OAuth para Decap CMS

#### Opción 1: Netlify Identity (Recomendado)
1. Crea cuenta en [Netlify](https://netlify.com)
2. Crea un sitio nuevo (puede ser vacío)
3. Ve a **Site settings** > **Identity** > **Enable Identity**
4. En **Registration**: Set to "Invite only"
5. En **External providers**: Add GitHub
6. En **Git Gateway**: Enable Git Gateway

#### Opción 2: OAuth directo con GitHub
1. Ve a GitHub Settings > Developer settings > OAuth Apps
2. Crea nueva OAuth App con:
   - Homepage URL: `https://tu-dominio.pages.dev`
   - Callback URL: `https://tu-dominio.pages.dev/admin/`

### 3. Actualizar configuración

1. Edita `public/admin/config.yml`:
```yaml
backend:
  name: github
  repo: tu-usuario/tu-repositorio
  branch: main
```

2. Edita `astro.config.mjs`:
```js
site: 'https://tu-dominio.pages.dev',
```

### 4. Desplegar en Cloudflare Pages

1. Sube código a GitHub
2. En Cloudflare Pages:
   - Connect to Git
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output: `dist`

## 📝 Uso del CMS

### Acceso al CMS
- URL: `https://tu-dominio.pages.dev/admin`
- Login con GitHub

### Estructura de contenido
```
src/content/docs/
├── index.mdx          # Home
├── roadmap/           # Timeline general
├── areas/             # Overview de equipos
├── contenidos/        # Planificación contenidos
├── produccion/        # Planificación producción
├── marketing/         # Planificación marketing
└── tecnologia/        # Planificación tech
```

## 🛠️ Comandos

```bash
npm run dev     # Desarrollo local
npm run build   # Build producción
npm run preview # Preview local
```

## 📄 Tipos de contenido en CMS

### Documentación
- **Carpeta**: `src/content/docs`
- **Formato**: Markdown
- **Campos**: Título, Descripción, Contenido

### Guías
- **Carpeta**: `src/content/docs/guides`
- **Formato**: MDX
- **Campos**: Título, Descripción, Sidebar config, Contenido

### Referencia
- **Carpeta**: `src/content/docs/reference`
- **Formato**: Markdown
- **Campos**: Título, Descripción, Contenido