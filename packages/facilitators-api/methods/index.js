Meteor.methods({
  'create/facilitator': function(arg) {
    var email, name, phone;
    name = arg.name, email = arg.email, phone = arg.phone;
    check(name, String);
    check(email, String);
    check(phone, String);
    return App.Collections.Facilitators.insert({
      name: name,
      email: email,
      phone: phone,
      owner: Meteor.userId()
    });
  },
  'update/facilitator': function(arg) {
    var _id, email, name, phone;
    _id = arg._id, name = arg.name, email = arg.email, phone = arg.phone;
    check(_id, String);
    check(name, String);
    check(email, String);
    check(phone, String);
    return App.Collections.Facilitators.update(_id, {
      $set: {
        name: name,
        email: email,
        phone: phone
      }
    });
  },
  'remove/facilitator': function(_id) {
    check(_id, String);
    return App.Collections.Facilitators.remove(_id);
  }
});
