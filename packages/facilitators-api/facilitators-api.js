import facilitatorsCollections from './collections/index.js';
import facilitatorsApi from './api/index.js';

import './methods/crud.js';

import { Collections, api } from 'meteor/training-manager:lib';

_.extend( Collections, facilitatorsCollections );
_.extend( api, facilitatorsApi );

const Facilitators = {
  collections: facilitatorsCollections,
  api: facilitatorsApi,
};

export default Facilitators;

export { facilitatorsCollections, facilitatorsApi };
