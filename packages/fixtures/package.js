Package.describe({
  name: 'training-manager:fixtures',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  debugOnly: true,
  summary: 'database fixtures for the training manager',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-modules-beta.4');
  api.use(['training-manager:core-web']);
  api.addFiles('fixtures.coffee', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:fixtures');
  api.addFiles('fixtures-tests.js');
});
