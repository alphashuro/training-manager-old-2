import login from './api/login.js';
import logout from './api/logout.js';
import signup from './api/signup.js';

import { api } from 'meteor/training-manager:lib';

// Add api methods
const authAPI = { login, logout, signup };

_.extend( api, authAPI );

// Import Meteor methods
import './methods/create-user.js';
