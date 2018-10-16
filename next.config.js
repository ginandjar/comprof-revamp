const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');
const withPlugins = require('next-compose-plugins');

require('dotenv').config();

const nextConfig = {
  webpack: (config, { buildId, dev }) => {
    // Perform customizations to webpack config

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          PLATFORM_URL: JSON.stringify(process.env.PLATFORM_URL),
          LEADS_URL: JSON.stringify(process.env.LEADS_URL),
          KATA_DOCS_URL: JSON.stringify(process.env.KATA_DOCS_URL),
          KATA_BLOG_URL: JSON.stringify(process.env.KATA_BLOG_URL),
          KATA_BLOG_WP_URL: JSON.stringify(process.env.KATA_BLOG_WP_URL)
        }
      })
    );

    // Important: return the modified config
    return config;
  }
};

module.exports = withPlugins([[withTypescript], [withSass]], nextConfig);
