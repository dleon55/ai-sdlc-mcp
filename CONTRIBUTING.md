# Cómo contribuir

¡Gracias por tu interés! Las contribuciones se reciben como *pull requests*
contra `main`. Para reportar errores o pedir funciones abre un
[issue](https://github.com/dleon55/ai-sdlc-mcp/issues). Las vulnerabilidades
se reportan en privado: ver [`SECURITY.md`](SECURITY.md).

## Requisitos

- Node.js 18 o superior (CI prueba 18, 20, 22 y 24).

## Preparar y probar

```bash
npm ci
npm test        # pruebas (node:test)
npm run lint    # ESLint estricto, falla con cualquier advertencia
npm audit --audit-level=high
```

CI (GitHub Actions) ejecuta pruebas, lint y auditoría en cada push y PR, y
CodeQL analiza el código. Un PR no se integra si alguno falla.

## Regla de pruebas

**Toda funcionalidad nueva o corrección de error debe incluir pruebas
automatizadas** en `test/` que fallen sin el cambio y pasen con él. Los PR sin
pruebas para código nuevo se devuelven, salvo cambios puramente de
documentación.

## Estilo y commits

- Código ES modules, sin advertencias de `npm run lint`.
- Mensajes de commit al estilo *Conventional Commits*
  (`feat:`, `fix:`, `docs:`, `ci:`...).
- Actualiza [`CHANGELOG.md`](CHANGELOG.md) en la sección *Sin publicar*.

## Contenido de los prompts

`data/prompts-full.json` es una instantánea generada fuera de este repositorio
(CC BY 4.0, ver [`NOTICE.md`](NOTICE.md)). No lo edites a mano; para
correcciones al texto de un prompt abre un issue y se regenera en origen.

## Licencia

Al contribuir aceptas que tu código se publique bajo licencia MIT.
