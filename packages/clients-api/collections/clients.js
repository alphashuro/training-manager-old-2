const Clients = new Mongo.Collection('clients');
import Students from './students.js';

Clients.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Clients.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Clients.helpers({
  students() {
    return Students.find({
      clientId: this._id,
    });
  },
});

export default Clients;
