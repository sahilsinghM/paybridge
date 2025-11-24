# PayBridge Marketing Site

A Next.js 14 + Tailwind CSS + shadcn/ui marketing site for the PayBridge fintech payments infrastructure platform.

## Tech Stack
- Next.js 14 (App Router)
- React 18 with TypeScript
- Tailwind CSS with enterprise palette (Primary #0047AB, Secondary #0F172A, Accent #38BDF8)
- shadcn/ui primitives (Button, Card, Tabs, Accordion, Input, etc.)

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 to view the site.

## Testing & Quality
- Lint the project:
  ```bash
  npm run lint
  ```
- Build for production:
  ```bash
  npm run build
  ```

## Deployment (Vercel)
You can deploy with either the Vercel dashboard or the CLI. No environment variables are required for this static marketing site by default.

### Deploy via Vercel dashboard (GitHub)
1. Push the repository to GitHub (or GitLab/Bitbucket).
2. In Vercel, choose **New Project** → import the repo and select the default root (`/`).
3. Build command: `npm run build`. Output directory: `.next` (defaults are fine). Install command: `npm install`.
4. Framework preset: **Next.js**. Node version: use the latest LTS (Vercel default is OK).
5. Leave environment variables empty unless you add API-driven features later.
6. Click **Deploy**. Vercel will create preview URLs on each PR and a production domain on merge.

### Deploy via Vercel CLI
1. Install the CLI: `npm i -g vercel`.
2. Authenticate: `vercel login`.
3. From the repo root, run `vercel` for the first deploy, then `vercel --prod` to promote to production.
4. The CLI will auto-detect Next.js; accept the defaults for build/output. Subsequent deploys reuse the project settings.

### Custom domain
- In the Vercel dashboard, add your domain under **Settings → Domains** and assign it to the production environment. DNS changes may take a few minutes to propagate.

## Notes
- All copy and visuals are original placeholders; replace with production content as needed.
- Components are mobile-first and use `max-w-7xl` container widths for consistent layouts.
- If your network blocks npm registry access, configure the appropriate proxy or mirror before running `npm install`.
- A `.npmrc` file pins the npm registry to `https://registry.npmjs.org/`; adjust it if your environment requires a different mirror.
- The site includes a custom 404 page for a polished production experience.
