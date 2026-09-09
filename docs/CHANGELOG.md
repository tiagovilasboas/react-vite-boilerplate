# 📝 Changelog

All notable changes are recorded here (Keep a Changelog). Versioning starts at **v0.1.0**.

## Unreleased

### Fixed

- `npm run cleanup` now deletes example files (custom Plop `removePath`) and copies App/router/locales/tests as raw files (JSX cannot go through Handlebars).
- CI uses `npm ci` (lockfile is the source of truth), then lint, type-check, tests, and build.
- `format` script actually runs ESLint `--fix`.
- Husky 9 `prepare` script (`husky` instead of deprecated `husky install`).
- Plop component tests use Vitest (`vi`) instead of Jest.
- Generated i18n namespaces are loaded (`import.meta.glob`); feature generator emits locale JSON.
- Favicon / PWA assets: `public/vite.svg` exists; manifest no longer points at missing PNGs.
- Docker example and docs use Node 20, matching `engines`.

### Changed

- README: clone-in-15-minutes first; scripts match `package.json`; honest 8/10 score; versioned React 19 / Vite 7 badges.
- `zod` is a runtime dependency (form example). Removed unused `kill-port` and `vite-plugin-environment`.
- Bundle visualizer no longer auto-opens a browser (CI-safe).
- Node engine: `>=20.19.0` (Vite 7).

### Added

- `.env.example`, Dependabot (npm + GitHub Actions), `.env` gitignore.
- Linux optional Rollup binary in `optionalDependencies` so `npm ci` works on GitHub Actions.

### Removed

- Unlighthouse (heavy transitive CVE surface; Lighthouse was never a CI gate).
