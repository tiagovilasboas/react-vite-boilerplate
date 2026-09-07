# Adapter for GitHub coding agent

**Primary source:** [`AGENTS.md`](../AGENTS.md). Read it first. This file is a thin adapter.

## Stack (excerpt)

React 19 + TypeScript + Vite / Mantine / Vitest / i18next / Plop / `@/` -> `src/` / features in `src/features/<name>/`.

## Dependency Rule

`components` -> `hooks` -> `services`

- UI must not import services or call fetch/axios directly.
- Hooks orchestrate and call services; services must not import UI.

## Do not

- Do not commit secrets.
- Do not break the Dependency Rule.
- Stay within existing top-level folders under src.

Prefer Plop for new features/components. Run test, lint, and type-check before finishing.
