import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
    port: 5000,
    strictPort: false
  },
  preview: {
    port: 5001,
    strictPort: false
  }
};

export default config;
