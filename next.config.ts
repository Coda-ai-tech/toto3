import type { NextConfig } from 'next';

const path = require('path');

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles/')],
    additionalData: `@use "./src/styles/_mixin.scss";`,
    silenceDeprecations: ['legacy-js-api', 'mixed-decls', 'color-functions', 'global-builtin', 'import'],
  },
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '[hostname]',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
  async redirects() {
    return [
      {
        source: '/en/about_toto_group',
        destination: '/en/about-toto',
        permanent: true,
      },
      {
        source: '/en/cleanovation-washlet',
        destination: '/en/cleanovation/washlet',
        permanent: true,
      },
      {
        source: '/en/gb_faucet',
        destination: '/en/gb-faucet',
        permanent: true,
      },
      {
        source: '/en/gb_faucet/:slug',
        destination: '/en/gb-faucet/showcase/:slug',
        permanent: true,
      },
      {
        source: '/en/gb_faucet/showcase',
        destination: '/en/gb-faucet/showcase/space01',
        permanent: true,
      },
      {
        source: '/en/gb_shower',
        destination: '/en/gb-shower',
        permanent: true,
      },
      {
        source: '/en/shower/shower',
        destination: '/en/gb-shower/planning/shower',
        permanent: true,
      },
      {
        source: '/en/touchlessfaucet',
        destination: '/en/gb-faucet/planning/touchless-faucet-lavatory',
        permanent: true,
      },
      {
        source: '/en/gb_lavatory',
        destination: '/en/gb-lavatory',
        permanent: true,
      },
      {
        source: '/en/gb_lavatory/:slug',
        destination: '/en/gb-lavatory/:slug',
        permanent: true,
      },
      {
        source: '/en/washlet_history',
        destination: '/en/washlet-history',
        permanent: true,
      },
      {
        source: '/en/washlethistory',
        destination: '/en/washlet-history',
        permanent: true,
      },
    ]
  },
  output: 'standalone',
};

export default nextConfig;
