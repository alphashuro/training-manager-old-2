import { webUtils, }
  from 'meteor/training-manager:lib-web';
import crudApi from '../api/crud.js';

webUtils.createCrudRoutes({
  plural: 'facilitators',
  singular: 'facilitator',
  crudApi,
});
