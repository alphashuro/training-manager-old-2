Meteor.publishComposite 'courses', {
  find: ->
    if (@userId)
      unless Roles.userIsInRole @userId, 'admin'
        return

      user = Meteor.users.findOne @userId

      { orgId } = user.profile

      return App.Collections.Courses.find { orgId }
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
      user = Meteor.users.findOne @userId

      { orgId } = user.profile

      return App.Collections.Courses.find {_id, orgId }
  children: [
    {
      find: ( course ) ->
        return App.Collections.Classes.find { courseId: course._id }
    }
  ]
}