/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    webpack(config, options) {
        const { isServer } = options;
        config.plugins.push(
            new NextFederationPlugin({
                name: 'app1',
                filename: 'static/chunks/remoteEntry.js',
            })
        );

        return config;
    },
}

module.exports = nextConfig
