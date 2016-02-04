/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:core-api',
  version: '0.0.1',
  summary: '',
  documentation: 'README.md',
});

Package.onUse(function coreApiOnUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use(['training-manager:lib']);
  api.mainModule('core-api.js');
});

Package.onTest(function coreApiOnTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:core-api');
  api.addFiles('core-api-tests.js');
});
