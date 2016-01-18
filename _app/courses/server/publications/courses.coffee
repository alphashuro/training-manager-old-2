Meteor.publish 'courses', ->
  if (@userId)
    unless Roles.userIsInRole @userId, 'admin'
      return

    user = Meteor.users.findOne @userId

    { orgId } = user.profile

    return App.Collections.Courses.find { orgId }

Meteor.publish 'course', (_id) ->
  if (@userId)
    user = Meteor.users.findOne @userId

    { orgId } = user.profile

    return App.Collections.Courses.find {_id, orgId }