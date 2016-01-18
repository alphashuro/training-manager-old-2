Meteor.methods
  'update/course': ( { _id, title, description, maxStudents } ) ->
    check _id, String
    check title, String
    check description, String
    check maxStudents, Number

    App.Collections.Courses.update _id, { 
      $set: { 
        title, 
        description, 
        maxStudents 
      }}

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