# Política de seguridad

## Versiones con soporte

Solo la versión más reciente publicada en npm
([`ai-sdlc-prompts-mcp`](https://www.npmjs.com/package/ai-sdlc-prompts-mcp))
recibe correcciones de seguridad.

## Cómo reportar una vulnerabilidad

**No abras un issue público.** Usa cualquiera de estos canales privados:

1. **GitHub**: pestaña *Security* → *Report a vulnerability*
   (reporte privado de vulnerabilidades, activado en este repositorio).
2. **Correo**: <soporte@lionsystems.com.mx> con el asunto
   `SEGURIDAD ai-sdlc-mcp`.

Incluye la versión afectada, pasos para reproducir y el impacto que observas.

## Qué esperar

- **Acuse de recibo en un máximo de 14 días naturales.**
- Evaluación inicial y plan de corrección tras el acuse.
- Publicaremos una versión corregida y un aviso (GitHub Security Advisory)
  dando crédito a quien reporta, salvo que pida lo contrario.

## Alcance

El servidor es de solo lectura, se comunica por stdio y no abre puertos ni
hace peticiones de red. Son relevantes, por ejemplo: ejecución de código,
lectura de archivos fuera de `data/`, inyección vía argumentos de las
herramientas MCP y vulnerabilidades en dependencias.
