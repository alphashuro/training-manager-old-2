import create from './clients/create.js';
import remove from './clients/remove.js';
import update from './clients/update.js';
import get from './clients/get.js';

import createStudent from './students/create.js';
import removeStudent from './students/remove.js';
import updateStudent from './students/update.js';
import getStudents from './students/get.js';

export {
  get, create, remove, update,
  getStudents, createStudent, removeStudent, updateStudent,
};

let api = {
  get, create, remove, update,
  createStudent, removeStudent, updateStudent,
};

export default api;
