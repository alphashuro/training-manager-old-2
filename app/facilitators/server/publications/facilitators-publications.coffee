Meteor.publishComposite 'facilitators', {
  find: ->
    if (@userId)
      unless Roles.userIsInRole @userId, 'admin'
        return

      return App.Collections.Facilitators.find { owner: @userId }
}

Meteor.publishComposite 'facilitator', {
  find: (_id) ->
    if (@userId)
      unless Roles.userIsInRole @userId, 'admin'
        return

      return App.Collections.Facilitators.find { owner: @userId }
}