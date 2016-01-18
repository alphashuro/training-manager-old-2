# Orgs
resetOrgs = -> App.Collections.Orgs.remove {}

# Users
users = 
  admins: [
    {
      name: 'Alpha Shuro'
      org: 'AeP IT'
      password: 'password'
      email: 'alpha@aepit.co.za'
    }
  ]

createUsers = ->
  resetOrgs()

  for admin in users.admins
    orgId = App.Collections.Orgs.insert name: admin.org

    userId = Accounts.createUser
      email: admin.email
      password: admin.password
      profile: 
        orgId: orgId
        name: admin.name

    Roles.addUsersToRoles userId, 'admin'

resetUsers = -> Meteor.users.remove {}

# Courses
courses = [
  {
    title : 'Course 1'
    description : 'A course course-like'
    maxStudents : 10
  }
]

createCourses = ->
  orgs = App.Collections.Orgs.find().fetch()

  for org in orgs
    for course in courses
      course.orgId = org._id
      App.Collections.Courses.insert course

resetCourses = ->
  App.Collections.Courses.remove {}

Meteor.methods
  'fixtures': ->
    resetUsers()
    createUsers()
    resetCourses()
    createCourses()