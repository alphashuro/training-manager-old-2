import { Clients, Students } from './collections/index.js';
import App from 'meteor/training-manager:lib';

App.Collections.Students = Students;
App.Collections.Clients = Clients;

export { Clients, Students }
