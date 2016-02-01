Package.describe({
  name: 'training-manager:lib',
  version: '0.0.1',
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
      'coffeescript',
      'ecmascript',
      'kadira:flow-router@2.10.0',
      'risul:chance@1.0.8'
    ]
  }

  api.use( packages.both );
  api.imply( packages.both );
  api.use( packages.server, 'server' );
  api.imply( packages.server, 'server' );
  api.use( packages.client, 'client' );
  api.imply( packages.client, 'client' );

  var files = {
    client: [],
    server: [],
    both: ['lib.js', 'utils/router.coffee']
  };

  api.addFiles(files.both);
  api.addFiles(files.server, 'server');
  api.addFiles(files.client, 'client');

  api.export('App')
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:lib');
  api.addFiles('lib-tests.js');
});
