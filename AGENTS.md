# AGENTS.md — React Vite Boilerplate

Contrato para qualquer agente de código (Cursor, Copilot, Claude Code, Kiro, etc.).
Este arquivo é a **fonte da verdade** do contrato AI-assisted do repositório — independente do harness.

## Stack

- **React 19** + **TypeScript** + **Vite 7**
- **Mantine** (UI) · **Vitest** + Testing Library · **i18next**
- **Plop** (geradores) · alias `@/` → `src/`
- Features em `src/features/<nome>/` (components, hooks/store, api/services, types)
- Rotas/páginas em `src/pages/` e `src/app/`

## Dependency Rule

Dependências sempre para dentro:

`UI (components)` → `hooks` → `services`

- Components **não** importam services/api diretamente.
- Hooks (incluindo stores Zustand) orquestram estado/UI e chamam services.
- Services acessam API/storage; **não** importam UI.

O gerador `feature` do Plop usa `store/` + `api/` como implementação dessa regra (o store é o hook).

## Comandos

| Comando                     | Uso                                  |
| --------------------------- | ------------------------------------ |
| `npm run cleanup`           | Remove exemplos (irreversível)       |
| `npm run dev`               | Dev server (Vite, porta 5173)        |
| `npm run test -- --run`     | Vitest (uma vez, CI)                 |
| `npm run lint`              | ESLint                               |
| `npm run type-check`        | TypeScript                           |
| `npm run plop -- feature`   | Gera feature completa                |
| `npm run plop -- component` | Gera componente em `src/components/` |

## Do

- Preferir **Plop** para features/componentes novos.
- Colocar lógica de feature em `src/features/...`.
- Usar `@/` em imports; manter i18n via `useTranslation`.
- Rodar `test -- --run` / `lint` / `type-check` antes de concluir.
- Depois de clonar para um produto real, rodar `npm run cleanup` e só então gerar features.

## Don't

- Não inventar camadas fora de `app/`, `pages/`, `components/`, `features/`, `hooks/`, `lib/`, `stores/`, `types/`.
- Não acoplar UI a fetch/API direto.
- Não commitar secrets (`.env`, tokens, chaves). Use `.env.example` como contrato.
- Não quebrar a Dependency Rule.

## Prompts prontos

1. **Nova feature:** "Gere a feature `X` com Plop (`npm run plop -- feature`), respeitando UI→hooks→services e testes Vitest."
2. **Componente compartilhado:** "Crie o componente `Y` em `src/components/` (ou via Plop), tipado, acessível e com teste."
3. **Refator Dependency Rule:** "Refatore `Z` para que o component use só hooks e o hook chame o service — sem imports UI↔service."

## Adapters (opcional)

Harnesses podem ter adapters finos que apontam para este arquivo (ex.: `.cursor/rules/`, `.github/copilot-instructions.md`). Em caso de conflito, **prevalece `AGENTS.md`**.
