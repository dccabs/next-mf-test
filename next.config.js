/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    webpack(config, options) {
        const { isServer } = options;
        config.plugins.push(
            new NextFederationPlugin({
                name: 'app1',
                filename: 'static/chunks/remoteEntry.js',
                // exposes: {
                //     './title': './components/exposedTitle.js',
                //     './checkout': './pages/checkout',
                // },
                // shared: {
                //     // whatever else
                // },
            })
        );

        return config;
    },
}

module.exports = nextConfig
