import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      h1: '5.6525rem',
      h2: '3.9975rem',
      h3: '2.8269rem',
      h4: '1.9994rem',
      h5: '1.4138rem',
      h6: '1rem',
    },
    extend: {},
  },
  plugins: [],
};
export default config;
