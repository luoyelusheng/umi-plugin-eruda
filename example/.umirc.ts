import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [require.resolve('../lib')],
  metas: [
    {
      'http-equiv': 'Cache-Control',
      content: 'no-cache, no-store, must-revalidate',
    },
    { 'http-equiv': 'Pragma', content: 'no-cache' },
    { 'http-equiv': 'Expires', content: '0' },
    { name: 'format-detection', content: 'telephone=yes' },
    {
      name: 'viewport',
      content:
        'width=device-width,user-scalable=no,initial-scale=0.5,maximum-scale=0.5,minimum-scale=0.5,viewport-fit=cover',
    },
  ],
});
