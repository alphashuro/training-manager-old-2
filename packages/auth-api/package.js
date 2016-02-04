/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:auth-api',
  version: '0.0.1',
  summary: 'Authentication API and methods for Training Manager',
  documentation: 'README.md',
});

Package.onUse(function authApiOnUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use('training-manager:lib');
  api.mainModule('auth-api.js');
});

Package.onTest(function authApiOnTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:auth-api');
  api.addFiles('auth-api-tests.js');
});
