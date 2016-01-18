Meteor.methods
  'remove/course': ( id ) ->
    check id, String
    
    App.Collections.Courses.remove id

  'remove/class': ( id ) ->
    check id, String

    App.Collections.Classes.remove id