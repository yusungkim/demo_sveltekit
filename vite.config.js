import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
    port: 3000,
    strictPort: false
  },
  preview: {
    port: 3001,
    strictPort: false
  },
  ssr: {
    noExternal: ["svelte-hero-icons"],
  },
};

export default config;
