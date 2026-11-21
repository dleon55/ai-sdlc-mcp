# Changelog

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/);
el proyecto sigue [SemVer](https://semver.org/lang/es/).

## [Sin publicar]

## [1.0.3] - 2026-11-21

### Cambiado
- `@modelcontextprotocol/sdk` 1.32.0 → 1.32.2.

### Cambiado
- El desarrollo se mueve a su propio repositorio público
  (`dleon55/ai-sdlc-mcp`), con historial conservado desde `mcp-server/` de
  `dleon55/ai-sdlc-prompts`. `repository` en `package.json` y `server.json`
  apunta al repo nuevo.
- `LICENSE` contiene solo la licencia MIT; el aviso CC BY 4.0 del contenido
  pasa a `NOTICE.md`.

### Agregado
- CI con pruebas (Node 18–24), ESLint estricto, `npm audit` y CodeQL.
- `SECURITY.md`, `CONTRIBUTING.md` y este changelog.

## [1.0.2] - 2026-11-01
### Agregado
- Registro en el registro oficial de MCP (`io.github.dleon55/ai-sdlc-prompts`).

## [1.0.1] - 2026-10-31
### Cambiado
- Publicación con *trusted publishing* (OIDC) y procedencia firmada.

## [1.0.0] - 2026-10-31
### Agregado
- Primera versión en npm: 5 herramientas MCP sobre los 112 prompts (ES/EN),
  con contrato de operación anexado por `resolve_prompt`.
