import type { Config } from 'tailwindcss';
import {heroui} from "@heroui/react";

export default {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-lightest':'#F1F2F4',
        'gray-light':'#E1E2E2',
        'gray-dark':'#47494A',
        primary:'#22439C',
        'primary-light':'#22439C',
        'primary-accent':'#1E4DC6',
        'primary-dark':'#0B163E'
      },
      screens: {
        xxs: '300px',
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        hd: '1440px',
        xxl: '1920px',
      },
      maxWidth: {
        hd: '1440px',
        content: '1650px',
        wrapper: '1920px',
      },
      padding: {
        'main-spacing-x-sm': 'var(--main-spacing-x-sm)',
        'main-spacing-x': 'var(--main-spacing-x)',
        'main-spacing-x-lg': 'calc(var(--main-spacing-x)*1.2)',
        'content-spacing-x-lg': 'calc(var(--main-spacing-x)*2)',
      },
      margin: {
        'main-spacing-x-sm': 'var(--main-spacing-x-sm)',
        'main-spacing-x': 'var(--main-spacing-x)',
        'main-spacing-x-lg': 'calc(var(--main-spacing-x)*2)',
      },
      zIndex: {
        skipToMain:'9999995',
        headerWrap: '9999994',
        modalMask: '98',
        main: '91',
        footer: '90',
        navMobBtn: '90',
        navMobList: '9999993',
        navContainer: '88',
        headerLogo: '87',
        headerLogoMd: '90',
        progressBar: '97',
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
