import { defineConfig } from 'astro/config';

import auth from 'auth-astro';

import vercel from '@astrojs/vercel/serverless';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [auth(), react()],
  output: 'server',
  adapter: vercel()
});