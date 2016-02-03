Meteor.methods({
  'update/session': function(_id, arg) {
    var date;
    date = arg.date;
    return Sessions.update(_id, {
      $set: {
        date: date
      }
    });
  }
});
