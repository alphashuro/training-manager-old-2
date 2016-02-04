import create from './bookings/create.js';
import remove from './bookings/remove.js';
import updateSession from './sessions/update.js';
import addStudent from './students/add.js';
import removeStudent from './students/remove.js';

export {
  create, remove,
  updateSession,
  addStudent, removeStudent,
};

let api = {
  create, remove,
  updateSession,
  addStudent, removeStudent,
};

export default api;
