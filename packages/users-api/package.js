/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:users-api',
  version: '0.2.0',
  summary: 'Users API of Training Manager',
  documentation: 'README.md',
});

Package.onUse(function onUsersApiUse(api) {
  api.versionsFrom('1.3-modules-beta.4');
  api.use(['training-manager:lib']);

  api.mainModule('users-api.js');
});

Package.onTest(function onUsersApiTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:users-api');

  api.mainModule('users-api-tests.js');
});
