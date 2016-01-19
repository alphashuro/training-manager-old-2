Meteor.methods
  'create/client': ( { name, phone, email } ) ->
    check name, String
    check phone, String
    check email, String

    Clients.insert {
      name,
      phone,
      email,
      owner: Meteor.userId()
    }

  'update/client': ( { _id, name, phone, email } ) ->
    check _id, String
    check name, String
    check phone, String
    check email, String

    Clients.update _id, {
      $set: {
        name,
        phone,
        email
      }
    }

  'remove/client': ( _id ) ->
    check _id, String

    Clients.remove _id