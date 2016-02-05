/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:lib-web',
  version: '0.0.1',
  summary: 'Lib package for web version of Training Manager',
  documentation: 'README.md',

});

Package.onUse(function onLibWebUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use(['training-manager:lib']);

  const packages = {
    client: [
      'themeteorchef:bert@2.1.0',
      'baysao:riotjs@2.3.11-0',
      'baysao:riot-meteor-data@0.1.0-6',
      'baysao:riot-layout@0.1.0-9',
      'twbs:bootstrap@3.3.6',
      'momentjs:moment@2.11.1',
      'natestrauser:select2@4.0.0_1',
      'tsega:bootstrap3-datetimepicker@4.17.37_1',
    ],
    both: [
      'training-manager:lib',
      'alphashuro:lib-debug',
      'baysao:riotjs-preprocessor-init',
    ],
  };


  api.use( packages.both );
  api.imply( packages.both );

  api.use( packages.client, 'client' );
  api.imply( packages.client, 'client' );

  api.mainModule('lib-web.js', 'client');

  const components = [
    'components/layouts/app-layout.jade.tag',
    'components/layouts/nav.jade.tag',

    'components/util/form-control.jade.tag',
  ];

  api.addFiles( components, 'client');
});

Package.onTest(function onLibWebTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:lib-web');
  api.addFiles('lib-web-tests.js');
});
