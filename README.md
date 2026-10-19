# Robohash

Robohash is a small React application that displays a searchable collection of robot cards. User data is loaded from JSONPlaceholder, and each user receives a robot image from [RoboHash](https://robohash.org/).

## Requirements

- Node.js 18 or newer
- npm

## Installation

Clone the repository, enter the project directory, and install its dependencies:

```bash
git clone <repository-url>
cd robohash
npm install
```

## Development

Start the Vite development server:

```bash
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`) in a browser. The app loads the users automatically; type in the search field to filter cards by name.

## Production build

Create an optimized production build:

```bash
npm run build
```

To serve the built files locally, run:

```bash
npm run preview
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

- `src/containers/App.jsx` — application state, data loading, and filtering
- `src/components/` — search, scrolling, and robot card components
- `src/index.css` and `src/containers/App.css` — application styles
- `public/` — static assets

The project uses React, Vite, and Tachyons CSS utilities.
