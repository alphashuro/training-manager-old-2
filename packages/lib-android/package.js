/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:lib-android',
  version: '0.0.1',
  summary: 'Lib UI package for android build of Training Manager',
  documentation: 'README.md',
});

Package.onUse(function onLibAndroidUse(api) {
  var packages;
  api.versionsFrom('1.2.1');

  packages = {
    both: [
      'mobile-experience',

    ],
  };

  api.use(packages.both);
  api.imply(packages.both);

  api.mainModule('lib-android.js');
});

Package.onTest(function onLibAndroidTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:lib-android');
  api.addFiles('lib-android-tests.js');
});
