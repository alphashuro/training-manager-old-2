/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:clients-api',
  version: '0.0.1',
  summary: 'Clients API from Training Manager.',
  documentation: 'README.md',
});

Package.onUse(function clientsApiOnUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use('training-manager:lib');
  api.mainModule('clients-api.js');
  api.mainModule('clients-api-server.js', 'server');
});

Package.onTest(function clientsApiOnTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:clients-api');
  api.addFiles('clients-api-tests.js');
});
