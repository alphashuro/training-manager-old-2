import coursesApi from './api/index.js';
import coursesCollections from './collections/index.js';

import { Collections, api } from 'meteor/training-manager:lib';

import './methods/all-methods.js';

_.extend( Collections, coursesCollections );

_.extend( api, coursesApi );

let courses = {
  api: coursesApi,
  collections: coursesCollections,
};

export default courses;

export { coursesApi, coursesCollections };
