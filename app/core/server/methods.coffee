Meteor.methods
  'create/user': ({ email, password, org }) ->
    check email, String
    check password, String
    check org, String

    profile = {
      org
    }

    orgExists = Meteor.users.findOne "profile.org" : org

    if orgExists
      throw new Meteor.error 'org-exists', "#{org} already exists."

    userId = Accounts.createUser { email, password, profile }

    Roles.addUsersToRoles userId, 'admin'

    return userId