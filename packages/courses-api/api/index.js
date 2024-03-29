import create from './courses/create.js';
import update from './courses/update.js';
import remove from './courses/remove.js';
import get from './courses/get.js';

import createClass from './classes/create.js';
import updateClass from './classes/update.js';
import removeClass from './classes/remove.js';

const api = {
  get,
  create,
  update,
  remove,

  createClass,
  updateClass,
  removeClass,
};

export {
  get, create, update, remove,
  createClass, updateClass, removeClass };

export default api;
