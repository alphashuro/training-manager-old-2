import clientsCollections from './collections/index.js';
import clientsApi from './api';

import { Collections, api } from 'meteor/training-manager:lib';

import './methods/clients/index.js';
import './methods/students/index.js';

_.extend( Collections, clientsCollections );
_.extend( api, clientsApi );

let Clients = {
  collections: clientsCollections,
  api: clientsApi,
};

export default Clients;
