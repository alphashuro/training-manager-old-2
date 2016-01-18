Meteor.publish null, ->
  if this.userId
    user = Meteor.users.findOne this.userId

    App.Collections.Orgs.find user.profile.orgId
