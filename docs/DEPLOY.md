# 🚀 Deploy

## Requirements

- Node.js **20.19+** (see `.nvmrc` and `package.json` `engines`)
- npm (lockfile is npm; `npm ci` in CI)

## Production build

```bash
npm ci
npm run build
```

## Local preview

```bash
npm run preview
```

## Docker (example)

```Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Adjust for Vercel, Netlify, Cloudflare Pages, Azure Static Web Apps, etc.

PWA icons in this repo are a Vite SVG placeholder. Replace them before treating installability as a product requirement.
