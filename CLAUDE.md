# CLAUDE.md - Guías de Estilo y Convenciones

Este archivo contiene convenciones específicas para mantener consistencia en la documentación de la conferencia 2025.

## Convenciones de Escritura

### Capitalización de Títulos y Secciones

**✅ Correcto:**
- "Post-evento" (no "Post-Evento")
- "Pre-evento" (no "Pre-Evento") 
- "Follow-up" (no "Follow-Up")
- "Check-in" (no "Check-In")
- "Team building" (no "Team Building")
- "Warm-up" (no "Warm-Up")

**Regla general:** En títulos y subtítulos en español, solo capitalizar la primera palabra y nombres propios. Las palabras compuestas con guión mantienen minúscula en la segunda parte.

### Ejemplos de Títulos Correctos

```markdown
## Entregas post-evento
## Actividades pre-conferencia  
## Sesiones de follow-up
## Proceso de check-in
## Dinámicas de team building
## Evento de warm-up
```

### Nombres de Lugares y Eventos

**✅ Correcto:**
- "Conferencia Valdivia" (nombre del evento)
- "Paillaco" (nombre de ciudad)
- "Santiago" (nombre de ciudad)

### Formatos de Fechas

**✅ Correcto:**
- "Jueves 06 de noviembre"
- "Viernes 07 de noviembre" 
- "Sábado 08 de noviembre"
- "6, 7 y 8 de noviembre" (cuando se menciona el rango)

**Regla**: Los nombres de meses siempre en minúscula según las normas del español.

### Referencias a Secciones

**✅ Correcto:**
- [Planificación General](/planificacion/overview)
- [Áreas - Contenidos](/areas/contenidos/overview)
- [Eventos Valdivia](/eventos/valdivia/overview)

### Términos Técnicos y Anglicismos

**✅ Usar tal como están:**
- "streaming" (mantener en minúscula)
- "networking" (mantener en minúscula)
- "feedback" (mantener en minúscula)
- "setup" (mantener en minúscula)
- "check-in", "check-out" (mantener en minúscula)

### Estados de Planificación

**✅ Formato estándar:**
```markdown
**Estado**: 🚧 En planificación
**Estado**: ✅ Confirmado
**Estado**: ⏳ Pendiente
**Estado**: 📋 En revisión
```

## Estructura de Archivos

### Nombres de Archivos
- Usar kebab-case: `jueves-06.md`, `overview.md`
- Fechas con cero inicial: `jueves-06`, `viernes-07`, `sabado-08`

### Estructura de Metadata
```yaml
---
title: Título Principal del Documento
description: Descripción breve y clara del contenido
---
```

### Patrón de Contenido
**Evitar repetir el título en el contenido**:
```markdown
---
title: Jueves 06 de noviembre
description: Agenda detallada del primer día
---

**Día 1 - Apertura e Inmersión**  ← Correcto (no repite el título)

## Contenido...
```

**❌ Incorrecto:**
```markdown
---
title: Jueves 06 de noviembre
---

# Jueves 06 de noviembre  ← Redundante
```

## Recordatorios Específicos

1. **Siempre revisar** la capitalización de títulos antes de guardar
2. **Post-evento** nunca lleva mayúscula en la segunda palabra
3. **Mantener consistencia** en el uso de anglicismos técnicos
4. **Usar números con cero inicial** en fechas (06, 07, 08)
5. **Actualizar configuración** cuando se mueven archivos o cambian rutas:
   - `astro.config.mjs` - actualizar navegación si es necesario
   - `keystatic.config.ts` - actualizar colecciones si es necesario

---

**Última actualización**: Junio 2025  
**Propósito**: Mantener consistencia en toda la documentación del evento