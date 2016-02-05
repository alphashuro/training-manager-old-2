/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:courses-api',
  version: '0.2.0',
  summary: 'Courses ',
  documentation: 'README.md',
});

Package.onUse(function coursesApiOnUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use('training-manager:lib');
  api.mainModule('courses-api.js');
  api.mainModule('courses-api-server.js', 'server');
});

Package.onTest(function coursesApiOnTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:courses-api');
  api.addFiles('courses-api-tests.js');
});
