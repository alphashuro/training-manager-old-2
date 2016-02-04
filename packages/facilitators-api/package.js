/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:facilitators-api',
  version: '0.0.1',
  summary: 'Facilitators API for the Training Manager.',
  documentation: 'README.md',
});

Package.onUse(function onFacilitatorsApiUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use(['training-manager:lib']);

  api.mainModule('facilitators-api.js');
  api.mainModule('facilitators-server.js', 'server');
});

Package.onTest(function onFacilitatorsApiTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:facilitators-api');
  api.addFiles('facilitators-api-tests.js');
});
