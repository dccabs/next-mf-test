/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const packageJson = require('./package.json');

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
                shared: {
                    shared: {
                        react: {
                            eager: true,
                            singleton: true,
                            requiredVersion: packageJson.dependencies.react
                        },
                        "react-dom": {
                            eager: true,
                            singleton: true,
                            requiredVersion: packageJson.dependencies["react-dom"]
                        },
                        "react/jsx-dev-runtime": {
                            eager: true,
                            singleton: true,
                            requiredVersion: packageJson.dependencies["react"]
                        },
                    },
                },
            })
        );

        return config;
    },
}

module.exports = nextConfig
