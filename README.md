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
1. Push the repository to GitHub.
2. In Vercel, create a new project from the repo.
3. Use the default build command (`npm run build`) and output directory (`.next`).
4. Set any required environment variables (none required for the static marketing site by default).
5. Deploy. Preview/production URLs will be managed by Vercel.

## Notes
- All copy and visuals are original placeholders; replace with production content as needed.
- Components are mobile-first and use `max-w-7xl` container widths for consistent layouts.
- If your network blocks npm registry access, configure the appropriate proxy or mirror before running `npm install`.
