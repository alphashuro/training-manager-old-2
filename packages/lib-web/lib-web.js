/* globals moment: false */

import './mixins/riot-meteor-data.js';

import createCrudRoutes from './utils/crud-routes.js';
import notify from './utils/notify.js';
import errorCb from './utils/error-cb.js';

import {
  utils,
}
from 'meteor/training-manager:lib';

let webUtils = {
  createCrudRoutes, notify, errorCb,
};

_.extend(utils, webUtils);

export {
  webUtils,
};

let libWeb = {
  utils: webUtils,
};

export default libWeb;

Meteor.startup(function setUpMoment() {
  moment.locale('en', {
    calendar: {
      lastDay: '[Yesterday at] LT',
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      lastWeek: '[Last] dddd [at] LT',
      nextWeek: 'dddd [at] LT',
      sameElse: 'MMM D [at] LT',
    },
  });
});

