import Facilitators
  from '../collections/facilitators.js';

Meteor.methods({

  'create/facilitator'({ name, email, phone }) {
    check(name, String);
    check(email, String);
    check(phone, String);

    return Facilitators.insert({
      name,
      email,
      phone,
      owner: Meteor.userId(),
    });
  },

  'update/facilitator'({ _id, name, phone, email }) {
    check(_id, String);
    check(name, String);
    check(email, String);
    check(phone, String);

    return Facilitators.update(_id, {
      $set: {
        name,
        email,
        phone,
      },
    });
  },

  'remove/facilitator'(_id) {
    check(_id, String);

    return Facilitators.remove(_id);
  },
});
