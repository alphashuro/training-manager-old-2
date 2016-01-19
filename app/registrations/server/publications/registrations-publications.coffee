Meteor.publishComposite 'registrations', {
  find: ->
    if ( @userId )
      unless Roles.userIsInRole @userId, 'admin' 
        return

      return Registrations.find owner: @userId
  children: [
    {
      find: ( registration ) ->
        return Facilitators.find registration.facilitatorId
    }
    {
      find: ( registration ) ->
        return Courses.find registration.courseId
    }
    {
      find: ( registration ) ->
        return Students.find _id: $in: registration.students
    }
  ]
}

Meteor.publishComposite 'registration', {
  find: ->
    if ( @userId )
      unless Roles.userIsInRole @userId, 'admin'
        return

      return Registrations.find owner: @userId
  children: [
    {
      find: ( registration ) ->
        return Facilitators.find registration.facilitatorId
    }
    {
      find: ( registration ) ->
        return Courses.find registration.courseId
    }
    {
      find: ( registration ) ->
        return Students.find _id: $in: registration.students
    }
  ]
}