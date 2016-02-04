/* eslint no-var: 0*/

Package.describe({
  name: 'training-manager:courses-web',
  version: '0.0.1',
  summary: 'Courses UI for the web version of Training Manager',
  documentation: 'README.md',
});

Package.onUse(function coursesWebOnUse(api) {
  api.versionsFrom('1.3-modules-beta.5');
  api.use([
    'training-manager:lib-web',
    'training-manager:courses-api',
  ]);
  api.mainModule('courses-web.js', 'client');

  const components = [
    'components/course-detail.jade.tag',
    'components/courses-page.jade.tag',
    'components/new-course.jade.tag',
  ];

  api.addFiles(components, 'client');
});

Package.onTest(function coursesWebOnTest(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('training-manager:courses-web');
  api.addFiles('courses-web-tests.js');
});
