import Facilitators
  from '../collections/facilitators.js';

Meteor.publishComposite('facilitators', {
  find() {
    if (this.userId) {
      if (!Roles.userIsInRole(this.userId, 'admin')) {
        return null;
      }
      return Facilitators.find({
        owner: this.userId,
      });
    }
  },
});

Meteor.publishComposite('facilitator', {
  find(_id) {
    if (this.userId) {
      if (!Roles.userIsInRole(this.userId, 'admin')) {
        return null;
      }
      return Facilitators.find({
        _id,
        owner: this.userId,
      });
    }
  },
});
