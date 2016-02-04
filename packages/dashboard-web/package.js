/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:dashboard-web',
  version: '0.0.1',
  summary: 'Dashboard UI package for the web version of Training Manager.',
  documentation: 'README.md',
});

Package.onUse(function dashboardWebOnUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use([
    'training-manager:lib-web',
  ]);
  api.addFiles('dashboard-web.js', 'client');
});

Package.onTest(function dashboardWebOnTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:dashboard-web');
  api.addFiles('dashboard-web-tests.js');
});
