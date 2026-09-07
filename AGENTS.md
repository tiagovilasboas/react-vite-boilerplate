# AGENTS.md — React Vite Boilerplate

Contrato para qualquer agente de código (Cursor, Copilot, Claude Code, Kiro, etc.).
Este arquivo é a **fonte da verdade** do contrato AI-assisted do repositório — independente do harness.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Mantine** (UI) · **Vitest** + Testing Library · **i18next**
- **Plop** (geradores) · alias `@/` → `src/`
- Features em `src/features/<nome>/` (components, hooks, services, types)

## Dependency Rule

Dependências sempre para dentro:

`UI (components)` → `hooks` → `services`

- Components **não** importam services diretamente.
- Hooks orquestram estado/UI e chamam services.
- Services acessam API/storage; **não** importam UI.

## Comandos

| Comando | Uso |
| --- | --- |
| `npm run cleanup` | Remove exemplos (irreversível) |
| `npm run dev` | Dev server (Vite) |
| `npm run test` | Vitest |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript |
| `npm run plop -- feature` | Gera feature completa |
| `npm run plop -- component` | Gera componente em `src/components/` |

## Do

- Preferir **Plop** para features/componentes novos.
- Colocar lógica de feature em `src/features/...`.
- Usar `@/` em imports; manter i18n via `useTranslation`.
- Rodar `test` / `lint` / `type-check` antes de concluir.

## Don't

- Não inventar camadas fora de `app/`, `components/`, `features/`, `hooks/`, `lib/`, `stores/`, `types/`.
- Não acoplar UI a fetch/API direto.
- Não commitar secrets (`.env`, tokens, chaves).
- Não quebrar a Dependency Rule.

## Prompts prontos

1. **Nova feature:** "Gere a feature `X` com Plop (`npm run plop -- feature`), respeitando UI→hooks→services e testes Vitest."
2. **Componente compartilhado:** "Crie o componente `Y` em `src/components/` (ou via Plop), tipado, acessível e com teste."
3. **Refator Dependency Rule:** "Refatore `Z` para que o component use só hooks e o hook chame o service — sem imports UI↔service."

## Adapters (opcional)

Harnesses podem ter adapters finos que apontam para este arquivo (ex.: `.cursor/rules/`, `.github/copilot-instructions.md`). Em caso de conflito, **prevalece `AGENTS.md`**.
