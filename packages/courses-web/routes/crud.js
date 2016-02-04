import { webUtils } from 'meteor/training-manager:lib-web';

webUtils.createCrudRoutes({
  plural: 'courses',
  singular: 'course',
});
