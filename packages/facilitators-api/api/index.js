import create from './facilitators/create.js';
import update from './facilitators/update.js';
import remove from './facilitators/remove.js';
import get from './facilitators/get.js';

const api = {
  create,
  update,
  remove,
  get,
};

export default api;

export { create, update, remove, get };
