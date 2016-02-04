/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:facilitators-web',
  version: '0.0.1',
  summary: 'Facilitators UI package for Training Manager',
  documentation: 'README.md',
});

Package.onUse(function facilitatorsWebOnUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use([
    'training-manager:lib-web',
    'training-manager:facilitators-api',
  ]);

  api.mainModule('facilitators-web.js', 'client');
});

Package.onTest(function facilitatorsWebOnTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:facilitators-web');
  api.addFiles('facilitators-web-tests.js');
});
