import Students
  from 'meteor/training-manager:clients-api/collections/students.js';

Meteor.methods({
  'create/student'({ name, phone, clientId }) {
    check(name, String);
    check(phone, String);
    check(clientId, String);

    return Students.insert({
      name: name,
      phone: phone,
      clientId: clientId,
    });
  },
  'update/student'({ _id, name, phone }) {
    check(_id, String);
    check(name, String);
    check(phone, String);

    return Students.update(_id, {
      $set: {
        name: name,
        phone: phone,
      },
    });
  },
  'remove/student'(_id) {
    check(_id, String);

    return Students.remove(_id);
  },
});
