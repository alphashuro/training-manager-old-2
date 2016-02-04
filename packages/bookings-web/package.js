/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:bookings-web',
  version: '0.0.1',
  summary: 'Bookings web UI package for Training Manager',
  documentation: 'README.md',
});

Package.onUse(function bookingsWebOnUse(api) {

  api.versionsFrom('1.3-modules-beta.5');

  api.use([
    'training-manager:lib-web',
    'training-manager:bookings-api',
  ]);

  api.mainModule('bookings-web.js', 'client');

  const components = [
    'components/add-students-modal.jade.tag',
    'components/booking-detail.jade.tag',
    'components/booking-page.jade.tag',
    'components/change-date-modal.jade.tag',
    'components/new-booking.jade.tag',
  ];

  api.addFiles( components, 'client' );
});

Package.onTest(function bookingsWebOnTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:bookings-web');
  api.addFiles('bookings-web-tests.js');
});
