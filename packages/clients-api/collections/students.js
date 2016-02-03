const Students = new Mongo.Collection('students');
import Clients from './clients.js';

Students.allow({
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

Students.deny({
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

Students.helpers({
  client: function() {
    return Clients.findOne(this.clientId);
  }
});

export default Students;
