Meteor.methods
  'create/facilitator': ( { name, email, phone } ) ->
    check name, String
    check email, String
    check phone, String

    App.Collections.Facilitators.insert {
      name, 
      email, 
      phone, 
      owner: Meteor.userId()
    }

  'update/facilitator': ( { _id, name, email, phone } ) ->
    check _id, String
    check name, String
    check email, String
    check phone, String

    App.Collections.Facilitators.update _id, { 
      $set: { 
        name, 
        email, 
        phone, 
      }}

  'remove/facilitator': ( _id ) ->
    check _id, String

    App.Collections.Facilitators.remove _id