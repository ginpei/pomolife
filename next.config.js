/* eslint-disable @typescript-eslint/no-var-requires */

const withPWA = require('next-pwa');

const config = {
  env: {
    version: process.env.npm_package_version,
  },
  pwa: {
    dest: 'public',
    importScripts: ['/ws/notifications.js'],
  },
};

// apply PWA only production to avoid hot-reload error
module.exports = process.env.NODE_ENV === 'production'
  ? withPWA(config)
  : config;
