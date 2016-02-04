/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:core-web',
  version: '0.1.0',
  summary: 'Core web package for Training Manager.',
  documentation: 'README.md',
});

Package.onUse(function coreWebOnUse(api) {
  var packages, components;
  api.versionsFrom('1.3-modules-beta.4');

  packages = {
    client: [],
    server: [],
    both: [
      'training-manager:lib',
      'training-manager:lib-web',
      'training-manager:core-api',

      'training-manager:bookings-web',
      'training-manager:clients-web',
      'training-manager:courses-web',
      'training-manager:facilitators-web',
      'training-manager:users-web',
      'training-manager:auth-web',
      'training-manager:dashboard-web',
    ],
  };

  api.use( packages.both );
  api.imply( packages.both );

  api.mainModule('core-web.js');

  components = [
    'components/index.jade.tag',
  ];

  api.addFiles(components, 'client');
});

Package.onTest(function coreWebOnTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:core-web');
  api.addFiles('core-web-tests.js');
});
