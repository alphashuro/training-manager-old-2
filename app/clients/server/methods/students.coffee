Meteor.methods
  'create/student': ({ name, phone, clientId }) ->
    check name, String
    check phone, String
    check clientId, String

    Students.insert {
      name,
      phone,
      clientId
    }

  'update/student': ({ _id, name, phone }) ->
    check _id, String
    check name, String
    check phone, String

    Students.update _id, {
      $set: {
        name,
        phone
      }
    }

  'remove/student': ( _id ) ->
    check _id, String

    Students.remove _id