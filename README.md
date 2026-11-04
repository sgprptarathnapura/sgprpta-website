# SGPRPTA Website — TanStack Start (React) scaffold

This replaces the earlier Next.js scaffold. It mirrors the folder structure of the
Lovable-generated project (minus `components/ui`, per your supervisor's instruction),
built fresh against the **current (2026)** TanStack Start setup — not the older
Vinxi-based version you'll find in a lot of tutorials.

## What's real vs. what's a placeholder

- **Config files are fully working**: `package.json`, `vite.config.ts`, `tsconfig.json`,
  `eslint.config.js`, `.prettierrc`, `.gitignore` — install and run, no edits needed to
  get a blank site rendering.
- **Every route/component/hook/lib file is intentionally empty** — just enough
  boilerplate to compile (`createFileRoute(...)`, a component that returns `null`).
  Copy your real Lovable code into each one; the file names match Lovable's 1:1 so it
  should be a straight paste.

## Get it running

```powershell
npm install
npm run dev
```

Open http://localhost:3000. You'll see a blank page (all routes return `null` right
now) — that confirms the framework itself is wired up correctly before you paste in
any real content.

`src/routeTree.gen.ts` will appear automatically the first time you run `npm run dev`
— **never create or edit it by hand**, the TanStack Router Vite plugin regenerates it
from whatever files exist in `src/routes/`. It's gitignored on purpose.

## Three things I deliberately changed from the Lovable structure

1. **`components/ui/` is not included at all** — per your supervisor, that folder is
   the shadcn/ui component library (dozens of generated files), not your site's own
   code. If your Lovable pages import anything from `@/components/ui/...`, you'll need
   to either rebuild those specific pieces with plain HTML/Tailwind, or add shadcn back
   deliberately later (`npx shadcn@latest add button`, etc. — one component at a time,
   not the whole folder).

2. **`lovable-error-reporting.ts` is left out entirely.** In the Lovable project this
   file talks to Lovable's own preview/telemetry platform — it has no function outside
   Lovable's editor, so copying it in would just be dead code (or worse, a runtime
   error hitting an endpoint that doesn't exist here). `error-capture.ts` and
   `error-page.ts` are still stubbed in, with a note not to copy Lovable's actual
   implementation for the same reason — write a plain React error boundary instead if
   you need one.

3. **No `bun.lock` / `bunfig.toml`, no `components.json`.** You've been using `npm`
   this whole project, so I kept that consistent rather than introducing Bun. And since
   there's no `ui/` folder, there's nothing for shadcn's `components.json` to configure.

## Things you'll need to bring over manually (I can't generate these)

- `public/favicon.ico` and `src/assets/hero-buses.png` / `logo.png` — these are binary
  image files from your Lovable project. Use the **Download** button visible in your
  Lovable screenshot to get the real files, then drop them into these folders.
- Any additional images/assets your pages reference.

## One area to watch closely

`src/routes/sitemap[.]xml.ts` (a server route, not a page) uses an API
(`createServerFileRoute`) that TanStack Start has changed more than once in the last
year. If `npm run dev` errors specifically on this file, check the current **"Server
Routes"** page at tanstack.com/start and adjust the handler shape — everything else in
this scaffold is stable and shouldn't need changes.

## Your workflow from here

1. `npm install && npm run dev` — confirm it runs blank, no errors.
2. Open your Lovable project's code editor (same view as your screenshots) side by side.
3. For each file listed under "empty" above, copy the real Lovable content in,
   skipping any `@/components/ui/...` imports (see point 1).
4. Re-check `npm run dev` after each file or two, so any error points at exactly what
   you just pasted.
5. Once it looks right locally, replace the old Next.js repo contents with this and push:
   ```powershell
   git add .
   git commit -m "Replace Next.js scaffold with TanStack Start (React) matching Lovable structure"
   git push
   ```
