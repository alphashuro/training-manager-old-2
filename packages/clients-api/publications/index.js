import Clients
  from 'meteor/training-manager:clients-api/collections/clients.js';
import Students
  from 'meteor/training-manager:clients-api/collections/students.js';

Meteor.publishComposite('clients', {
  find() {
    return Clients.find({
      owner: this.userId,
    });
  },
  children: [
    {
      find(client) {
        return Students.find({
          clientId: client._id,
        });
      },
    },
  ],
});

Meteor.publishComposite('client', {
  find(_id) {
    return Clients.find({
      _id,
      owner: this.userId,
    });
  },
  children: [
    {
      find(client) {
        Students.find({ clientId: client._id });
      },
    },
  ],
});
