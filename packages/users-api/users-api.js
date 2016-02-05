import usersCollections from './collections/index.js';
import usersApi from './api/index.js';

import { Collections, api } from 'meteor/training-manager:lib';

_.extend( Collections, usersCollections );

api.Users = usersApi;

const Users = {
  api: usersApi,
  collections: usersCollections,
};

export { usersApi, usersCollections };

export default Users;
