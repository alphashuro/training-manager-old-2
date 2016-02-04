import { webUtils } from 'meteor/training-manager:lib-web';

webUtils.createCrudRoutes({
  plural: 'clients',
  singular: 'client',
});
