# Sonny Weather

This is a demo of SvelteKit using TailwindCSS, OpenWeatherMap API, and Google Geocoding API.

## Usage
Add a file in your root directory named `.env.development`. Add the following keys and their API Key values: `VITE_GOOGLE_API_KEY`, `VITE_OPENWEAHTER_API_KEY`.

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
*You must accept the request for location services.*
## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```
