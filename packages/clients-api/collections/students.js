const Students = new Mongo.Collection('students');
import Clients from './clients.js';

Students.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Students.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Students.helpers({
  client: () => Clients.findOne( this.clientId ),
});

export default Students;
