/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:bookings-api',
  version: '0.0.1',
  summary: 'Booking api for Training Manager',
  documentation: 'README.md',
});

Npm.depends({
  moment: '2.10.6',
});

Package.onUse(function bookingsApiOnUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use([
    'training-manager:lib',
    'training-manager:facilitators-api',
    'training-manager:courses-api',
    'training-manager:clients-api',
  ]);
  api.mainModule('bookings-api.js');
  api.mainModule('bookings-api-server.js', 'server');
});

Package.onTest(function bookingsApiOnTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:bookings-api');
  api.addFiles('bookings-api-tests.js');
});
