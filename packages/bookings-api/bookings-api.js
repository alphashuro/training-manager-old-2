import bookingsCollections from './collections/index.js';

import bookingsApi from './api/index.js';

import { Collections, api } from 'meteor/training-manager:lib';

// Add Collections
_.extend( Collections, bookingsCollections );

// Add API methods
_.extend( api, bookingsApi );

// Add Meteor methods
import './methods/all-methods.js';

let Bookings = {
  collections: bookingsCollections,
  api: bookingsApi,
};

export default Bookings;
