import { Bookings, Sessions } from './collections/index.js';
import App from 'meteor/training-manager:lib';

App.Collections.Bookings = Bookings;
App.Collections.Sessions = Sessions;

export { Bookings, Sessions };
