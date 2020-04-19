/* eslint-disable @typescript-eslint/no-var-requires */

const withPWA = require('next-pwa');

module.exports = withPWA({
  env: {
    version: process.env.npm_package_version,
  },
  pwa: {
    dest: 'public',
    importScripts: ['/ws/notifications.js'],
  },
});
