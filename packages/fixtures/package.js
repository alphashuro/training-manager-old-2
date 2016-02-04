/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:fixtures',
  version: '0.1.0',
  debugOnly: true,
  summary: 'Database fixtures for the Training Manager',
  documentation: 'README.md',
});

Npm.depends({
  chance: '0.8.0',
});

Package.onUse(function onFixturesUse(api) {
  api.versionsFrom('1.3-modules-beta.4');
  api.use(['training-manager:core']);
  api.addFiles('fixtures.js', 'server');
});

Package.onTest(function onFixturesTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:fixtures');
  api.addFiles('fixtures-tests.js');
});
