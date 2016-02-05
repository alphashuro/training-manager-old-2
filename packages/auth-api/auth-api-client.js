import login from './api/login.js';
import logout from './api/logout.js';
import signup from './api/signup.js';
import getCurrentUser from './api/currentUser.js';

import { api } from 'meteor/training-manager:lib';

// Add api methods
const Auth = { login, logout, signup, getCurrentUser };

api.Auth = Auth;

export default Auth;
