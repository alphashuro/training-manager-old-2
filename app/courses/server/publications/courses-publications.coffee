Meteor.publishComposite 'courses', {
  find: ->
    if (@userId)
      unless Roles.userIsInRole @userId, 'admin'
        return

      return App.Collections.Courses.find { owner: @userId }
  children: [
    {
      find: ( course ) ->
        return App.Collections.Classes.find { courseId: course._id }
    }
  ]
}

Meteor.publishComposite 'course', {
  find: (_id) ->
    if (@userId)

      return App.Collections.Courses.find { owner: @userId }
  children: [
    {
      find: ( course ) ->
        return App.Collections.Classes.find { courseId: course._id }
    }
  ]
}