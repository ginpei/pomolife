const withPWA = require('next-pwa');

module.exports = withPWA({
  env: {
    version: process.env.npm_package_version,
  },
  pwa: {
    dest: 'public',
  },
});
