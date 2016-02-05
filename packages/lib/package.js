/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:lib',
  version: '0.2.0',
  summary: 'Lib package of Training Manager',
  documentation: 'README.md',
});

Package.onUse(function onLibUse(api) {
  var packages;

  api.versionsFrom('1.3-modules-beta.4');

  packages = {
    client: [
      // Helpful client-side library
      'jquery',
    ],
    server: [
      'reywood:publish-composite@1.4.2',
    ],
    both: [
      // Packages every Meteor app needs to have
      'meteor-base',
      // The database Meteor supports right now
      'mongo',
      // Meteor's client-side reactive programming library
      'tracker',
      // JS/CSS minifiers run for production mode
      'standard-minifiers',
      // Enable ECMAScript2015+ syntax in app code
      'ecmascript',
      // ECMAScript 5 compatibility for older browsers.
      'es5-shim',
      // Router for meteor app
      'kadira:flow-router@2.10.0',
      // ES6 modules package
      'modules',
      // User accounts management packages
      'accounts-base',
      'accounts-password',
      // Roles package for managing user roles
      'alanning:roles@1.2.14',
      // Package for checking argument types
      'check',
      // Add helpers to collection objects
      'dburles:collection-helpers@1.0.4',

    ],
  };

  api.use( packages.both );
  api.imply( packages.both );
  api.use( packages.server, 'server' );
  api.imply( packages.server, 'server' );
  api.use( packages.client, 'client' );
  api.imply( packages.client, 'client' );

  api.mainModule('lib.js');

  api.export('App');
});

Package.onTest(function onLibTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:lib');
  api.addFiles('lib-tests.js');
});
