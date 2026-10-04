<div align="center">
  <img src="public/logo.jpeg" alt="iDEA logo" height="100" />

# iDEA

Welcome to iDEA. Join us as we bridge the gap between vision and execution.

[![Club: Community](https://img.shields.io/badge/club-community-%23e05d44?style=for-the-badge)](https://github.com/IDEA-Amrita)
</div>

## Find out what we do

iDEA is a student innovation community at Amrita Vishwa Vidyapeetham, Coimbatore. Students collaborate on projects across web engineering, mobile development, artificial intelligence, embedded systems, and robotics.

Find out more about us in our [documentation](https://github.com/IDEA-Amrita/official-documentation). <br />
[Contact us directly on Instagram](https://www.instagram.com/idea_amrita/).

This repository contains the official iDEA website, including an interactive project showcase, the core team roster, contact channels, and contribution forms.

## Developer jargon

- Node.js 22.12 or newer
- npm 10 or newer
- React 19
- TypeScript 6
- Vite 8

### Getting started

Clone the repository and install its dependencies:

```sh
git clone https://github.com/IDEA-Amrita/iDEA.git
cd iDEA
npm ci
```

Start the local development server:

```sh
npm run dev
```

The application will be available at `http://localhost:5173/`.

You can also install dependencies and start the development server in one command:

```sh
npm install && npm start
```

### Available scripts

- `npm run dev` — start the Vite development server with Hot Module Replacement.
- `npm start` — start the development server and expose it on the local network.
- `npm run check` — run formatting, linting, typechecking, tests, and a production build.
- `npm test` — run the Vitest test suite.
- `npm run test:coverage` — run tests and generate an lcov coverage report.
- `npm run build` — build the application and verify its bundle budgets.
- `npm run preview` — serve the production build locally.
- `npm run format` — format the project with Prettier.
- `npm run format:check` — check formatting without changing files.
- `npm run lint` — run ESLint with zero-warning tolerance.
- `npm run typecheck` — typecheck the project without emitting files.

### Git hooks

`npm ci` installs the tracked `hooks/pre-commit` hook for this clone. Every local
commit runs `npm run check`, including formatting, linting, typechecking, tests,
and a production build. A failing check stops the commit. Git hooks are local to
each clone, so run `npm ci` after cloning to enable the hook.

## Architecture and structure

```text
iDEA/
├── scripts/
│   └── check-bundle.js          # Bundle budget and import verification
├── src/
│   ├── components/              # Reusable UI components
│   ├── config/                  # Contact, form, and navigation settings
│   ├── data/                    # Projects, team records, and site copy
│   ├── hooks/                   # Custom React hooks
│   ├── pages/                   # Landing page and feature sections
│   ├── providers/               # React context providers
│   ├── styles/                  # CSS design system
│   └── utils/                   # Shared helpers
├── .env.example                     # Environment variable template
├── eslint.config.js                 # ESLint configuration
├── tsconfig.json                    # TypeScript configuration
└── vite.config.ts                   # Vite configuration
```

## Deployment

The project is configured for deployment on Vercel. `vercel.json` defines the Vite build command and `dist` output directory, while production URLs and Open Graph metadata use Vercel environment variables when available.

## License

This project is licensed under the [MIT License](LICENSE).
