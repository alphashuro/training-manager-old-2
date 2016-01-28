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
    {
      find: ( registration ) ->
        return Sessions.find registrationId: registration._id
    }
  ]
}

Meteor.publishComposite 'registration', {
  find: (_id) ->
    if ( @userId )
      unless Roles.userIsInRole @userId, 'admin'
        return

      return Registrations.find { _id, owner: @userId }
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
    {
      find: ( registration ) ->
        return Sessions.find registrationId: registration._id
    }
  ]
}