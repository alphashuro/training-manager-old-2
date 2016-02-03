Meteor.methods({
  'create/client': function(arg) {
    var email, name, phone;
    name = arg.name, phone = arg.phone, email = arg.email;
    check(name, String);
    check(phone, String);
    check(email, String);
    return Clients.insert({
      name: name,
      phone: phone,
      email: email,
      owner: Meteor.userId()
    });
  },
  'update/client': function(arg) {
    var _id, email, name, phone;
    _id = arg._id, name = arg.name, phone = arg.phone, email = arg.email;
    check(_id, String);
    check(name, String);
    check(phone, String);
    check(email, String);
    return Clients.update(_id, {
      $set: {
        name: name,
        phone: phone,
        email: email
      }
    });
  },
  'remove/client': function(_id) {
    check(_id, String);
    return Clients.remove(_id);
  }
});
