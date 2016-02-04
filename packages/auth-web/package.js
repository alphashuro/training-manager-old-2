/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:auth-web',
  version: '0.0.1',
  summary: 'Training Manager Authentication UI for web client',
  documentation: 'README.md',
});

Package.onUse(function authWebOnUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use([
    'training-manager:lib-web',
    'training-manager:auth-api',
  ]);
  api.mainModule('auth-web.js', 'client');

  const components = [
    'components/login.jade.tag',
    'components/signup.jade.tag',
  ];

  api.addFiles(components, 'client');
});

Package.onTest(function authWebOnTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:auth-web');
  api.addFiles('auth-web-tests.js');
});
