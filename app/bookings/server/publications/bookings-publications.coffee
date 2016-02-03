Meteor.publishComposite 'bookings', {
  find: ->
    if ( @userId )
      unless Roles.userIsInRole @userId, 'admin'
        return

      return Bookings.find owner: @userId
  children: [
    {
      find: ( booking ) ->
        return Facilitators.find booking.facilitatorId
    }
    {
      find: ( booking ) ->
        return Courses.find booking.courseId
    }
    {
      find: ( booking ) ->
        if ( booking.studentIds )
          return Students.find _id: $in: booking.studentIds
      children: [
        {
          find: ( student ) ->
            return Clients.find student.clientId
        }
      ]
    }
    {
      find: ( booking ) ->
        return Sessions.find bookingId: booking._id
    }
  ]
}

Meteor.publishComposite 'booking', {
  find: (_id) ->
    if ( @userId )
      unless Roles.userIsInRole @userId, 'admin'
        return

      return Bookings.find { _id, owner: @userId }
  children: [
    {
      find: ( booking ) ->
        return Facilitators.find booking.facilitatorId
    }
    {
      find: ( booking ) ->
        return Courses.find booking.courseId
    }
    {
      find: ( booking ) ->
        return Students.find _id: $in: booking.studentIds
      children: [
        {
          find: ( student ) ->
            return Clients.find student.clientId
        }
      ]
    }
    {
      find: ( booking ) ->
        return Sessions.find bookingId: booking._id
    }
  ]
}
