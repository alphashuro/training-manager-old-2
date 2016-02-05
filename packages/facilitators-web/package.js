/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:facilitators-web',
  version: '0.2.0',
  summary: 'Facilitators UI package for Training Manager',
  documentation: 'README.md',
});

Package.onUse(function facilitatorsWebOnUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use([
    'training-manager:lib-web',
    'training-manager:facilitators-api',
  ]);

  api.mainModule('facilitators-web.js', 'client');

  const components = [
    'components/facilitator-detail.jade.tag',
    'components/facilitators-page.jade.tag',
    'components/new-facilitator.jade.tag',
  ];

  api.addFiles(components, 'client');
});

Package.onTest(function facilitatorsWebOnTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:facilitators-web');
  api.addFiles('facilitators-web-tests.js');
});
