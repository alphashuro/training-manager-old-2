Meteor.methods
  'create/class': ( { title, description, duration, price, courseId } ) ->
    check title, String
    check description, String
    check duration, Number
    check price, Number
    check courseId, String

    App.Collections.Classes.insert {
      title, description, duration, price, courseId
    }

  'update/class': ( { _id, title, description, duration, price } ) ->
    check _id, String
    check title, String
    check description, String
    check duration, Number
    check price, Number

    App.Collections.Classes.update _id, {
      $set: {
        title,
        description,
        duration,
        price
      }}

  'remove/class': ( id ) ->
    check id, String

    App.Collections.Classes.remove id
