Meteor.methods
  'create/course': ( { title, description, maxStudents } ) ->
    check title, String
    check description, String
    check maxStudents, Number

    App.Collections.Courses.insert {
      title, 
      description, 
      maxStudents, 
      owner: Meteor.userId()
    }

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

  'remove/course': ( _id ) ->
    check _id, String
    
    App.Collections.Courses.remove _id