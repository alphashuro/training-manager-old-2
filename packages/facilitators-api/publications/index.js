Meteor.publishComposite('facilitators', {
  find: function() {
    if (this.userId) {
      if (!Roles.userIsInRole(this.userId, 'admin')) {
        return;
      }
      return App.Collections.Facilitators.find({
        owner: this.userId
      });
    }
  }
});

Meteor.publishComposite('facilitator', {
  find: function(_id) {
    if (this.userId) {
      if (!Roles.userIsInRole(this.userId, 'admin')) {
        return;
      }
      return App.Collections.Facilitators.find({
        owner: this.userId
      });
    }
  }
});
