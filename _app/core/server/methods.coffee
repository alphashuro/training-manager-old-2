Meteor.methods
  'create/user': ({ email, password, org, name }) ->
    check email, String
    check password, String
    check org, String
    check name, String

    profile = {
      name
    }

    orgExists = App.Collections.Orgs.findOne name : org

    if orgExists
      throw new Meteor.error 'org-exists', "#{org} already exists."
    else
      orgId = App.Collections.Orgs.insert name: org
      profile.orgId = orgId

    userId = Accounts.createUser { email, password, profile }

    Roles.addUsersToRoles userId, 'admin'

    return userId