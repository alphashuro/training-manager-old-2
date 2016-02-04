/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:clients-web',
  version: '0.0.1',
  summary: 'Clients UI for Training Manager web version.',
  documentation: 'README.md',
});

Package.onUse(function onClientsWebUser(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use([
    'training-manager:lib-web',
    'training-manager:clients-api',
  ]);
  api.mainModule('clients-web.js', 'client');
});

Package.onTest(function onClientsWebTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:clients-web');
  api.addFiles('clients-web-tests.js');
});
