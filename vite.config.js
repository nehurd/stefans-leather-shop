import { defineConfig } from 'vite';

// Served at https://nehurd.github.io/stefans-leather-shop/ — asset URLs
// need this prefix or they'll 404 under the repo subpath.
export default defineConfig({
  base: '/stefans-leather-shop/',
});
