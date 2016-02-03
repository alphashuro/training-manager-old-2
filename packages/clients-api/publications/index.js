Meteor.publishComposite('clients', {
  find: function() {
    return Clients.find({
      owner: this.userId
    });
  },
  children: [
    {
      find: function(client) {
        return Students.find({
          clientId: client._id
        });
      }
    }
  ]
});

Meteor.publishComposite('client', {
  find: function(_id) {
    return Clients.find({
      _id: _id,
      owner: this.userId
    });
  },
  children: [
    {
      find: function(client) {
        return Students.find({
          clientId: client._id
        });
      }
    }
  ]
});
