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
        if ( registration.studentIds ) 
          return Students.find _id: $in: registration.studentIds
      children: [
        {
          find: ( student ) ->
            return Clients.find student.clientId
        }
      ]
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
        return Students.find _id: $in: registration.studentIds
      children: [
        {
          find: ( student ) ->
            return Clients.find student.clientId
        }
      ]
    }
    {
      find: ( registration ) ->
        return Sessions.find registrationId: registration._id
    }
  ]
}