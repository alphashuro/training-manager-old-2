Meteor.methods
  'create/course': ( { title, description, maxStudents } ) ->
    check title, String
    check description, String
    check maxStudents, Number

    user = Meteor.users.findOne Meteor.userId()

    App.Collections.Courses.insert {
      title, 
      description, 
      maxStudents, 
      orgId: user.profile.orgId
    }

  'create/class': ( { title, description, duration, price, courseId } ) ->
    check title, String
    check description, String
    check duration, Number
    check price, Number
    check courseId, String

    App.Collections.Classes.insert {
      title, description, duration, price, courseId
    }