Package.describe({
  name: 'training-manager:core-web',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-modules-beta.4');

  var packages = {
    client: [],
    server: [],
    both: [
      'training-manager:bookings-web',
      'training-manager:clients-web',
      'training-manager:courses-web',
      'training-manager:facilitators-web',
      'training-manager:users-web',

      'training-manager:core-api',
    ]
  }

  api.use( packages.both );
  api.imply( packages.both );

  api.mainModule('core-web.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:core-web');
  api.addFiles('core-web-tests.js');
});
