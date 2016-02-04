/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:users-web',
  version: '0.0.1',
  summary: '',
  documentation: 'README.md',
});

Package.onUse(function onUsersWebUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use([
    'training-manager:lib-web',
    'training-manager:users-api',
  ]);
  api.mainModule('users-web.js', 'client');
});

Package.onTest(function onUsersWebTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:users-web');
  api.addFiles('users-web-tests.js');
});
