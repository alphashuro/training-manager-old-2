const Clients = new Mongo.Collection('clients');
import Students from './students.js';

Clients.allow({
  insert: function() {
    return false;
  },
  update: function() {
    return false;
  },
  remove: function() {
    return false;
  }
});

Clients.deny({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});

Clients.helpers({
  students: function() {
    return Students.find({
      clientId: this._id
    });
  }
});

export default Clients;
