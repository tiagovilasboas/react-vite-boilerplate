# ❓ FAQ

| Pergunta                                 | Resposta                                                                                                                                             |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Qual gerenciador de pacotes?             | **npm**. O lockfile commitado é `package-lock.json`. Yarn/pnpm podem funcionar, mas você assume o lock.                                              |
| Qual versão de Node?                     | **20.19+** (Vite 7). `.nvmrc` aponta para 20.                                                                                                        |
| Como limpar os exemplos?                 | `npm run cleanup` e confirme no prompt. Irreversível no working tree. Depois: `npm run test -- --run` e `npm run build`.                             |
| Posso trocar Zustand por React Query?    | Sim. A regra de dependência desacopla dados; ajuste hooks/services.                                                                                  |
| Como mudar o idioma padrão?              | `lng` em `src/i18n.ts` ou `i18n.changeLanguage()` em runtime. Novos JSON em `src/locales/{lng}/{ns}.json` entram via glob.                           |
| Onde defino variáveis de ambiente?       | Copie `.env.example` para `.env.local`. Só `VITE_*` vai para o client.                                                                               |
| Tailwind faz falta?                      | Mantine cobre a maioria dos casos; Tailwind é opt-in e foge do escopo.                                                                               |
| Por que o Lighthouse não é 100 no badge? | Não medimos no CI e não há script de Lighthouse no starter (menos superfície de CVE).                                                                |
| `npm ci` falha no Rollup nativo?         | O npm às vezes omite optional deps de plataforma. O lockfile inclui `@rollup/rollup-linux-x64-gnu` para o CI Ubuntu. Em outro OS, use `npm install`. |
| PWA não instala no celular?              | Troque o SVG placeholder por PNG 192/512 em `public/` e atualize `vite.config.ts`.                                                                   |
