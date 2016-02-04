import create from './clients/create.js';
import remove from './clients/remove.js';
import update from './clients/update.js';

import createStudent from './students/create.js';
import removeStudent from './students/remove.js';
import updateStudent from './students/update.js';

export {
  create, remove, update,
  createStudent, removeStudent, updateStudent,
};

let api = {
  create, remove, update,
  createStudent, removeStudent, updateStudent,
};

export default api;
