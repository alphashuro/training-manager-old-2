import create from './facilitators/create.js';
import update from './facilitators/update.js';
import remove from './facilitators/remove.js';

const api = {
  create,
  update,
  remove,
};

export default api;

export { create, update, remove };
