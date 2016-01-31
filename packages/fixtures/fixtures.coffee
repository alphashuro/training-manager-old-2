chance = new Chance('training-app-fixtures')

# Users
users = 
  orgs: [
    {
      org: 'AeP IT'
      password: 'password'
      email: 'alpha@aepit.co.za'
    }
  ]

createUsers = ->
  for org in users.orgs

    userId = Accounts.createUser
      email: org.email
      password: org.password
      profile: 
        org: org.org

    Roles.addUsersToRoles userId, 'admin'

resetUsers = -> Meteor.users.remove {}

# Courses
courses = [
  {
    title : 'Course 1'
    description : 'A course course-like'
    maxStudents : 10
  }
  {
    title : 'Course 2'
    description : 'A course not unlike another course'
    maxStudents : 20
  }
]

createCourses = ->
  users = Meteor.users.find().fetch()

  for user in users
    for course in courses
      course.owner = user._id
      courseId = App.Collections.Courses.insert course

  createClasses()

resetCourses = ->
  resetClasses()
  
  App.Collections.Courses.remove {}

  # Classes
classes = [
  { 
    title: 'Class 1' 
    description: 'A class for the course'
    duration: 2
    price: 1000
  }
  {
    title: 'Class 2'
    description: 'Another class for the course'
    duration: 4
    price: 2000
  }
]

createClasses = ->
  courses = App.Collections.Courses.find().fetch()

  for course in courses
    for _class in classes
      _class.courseId = course._id
      App.Collections.Classes.insert _class

resetClasses = -> App.Collections.Classes.remove {}

# Clients
clients = [
  {
    name : 'Client 1'
    phone : '0161234567'
    email : 'client1@email.com'
  }
  {
    name : 'Client 2'
    phone : '0123134512'
    email : 'client2@email.com'
  }
]

createClients = ->
  users = Meteor.users.find().fetch()

  for user in users
    for client in clients
      client.owner = user._id

      Clients.insert client

  createStudents()

resetClients = ->
  resetStudents()

  Clients.remove {}

  # Students
students = [
  {
    name : 'Student 1'
    phone : '0731231242'
    email : 'student1@anemail.com'
  }
  {
    name : 'Student 2'
    phone : '0623983242'
    email : 'student2@otheremail.com'
  }
]

createStudents = ->
  clients = Clients.find().fetch()

  for client in clients
    for student in students
      student.clientId = client._id

      Students.insert student

resetStudents = ->
  Students.remove {}

#Facilitators
facilitators = [
  {
    name : 'Facilitator 1'
    phone : '1245431451'
    email : 'facilitator1@email.com'
  }
  {
    name : 'Facilitator 2'
    phone : '2322352342'
    email : 'facilitator2@email.com'
  }
]

createFacilitators = ->
  users = Meteor.users.find().fetch()

  for user in users
    for facilitator in facilitators
      facilitator.owner = user._id

      Facilitators.insert facilitator

resetFacilitators = ->
  Facilitators.remove {}

# Registrations

createRegistrations = ->
  users = Meteor.users.find().fetch()

  courses = App.Collections.Courses.find().fetch()
  clients = App.Collections.Clients.find().fetch()
  facilitators = App.Collections.Facilitators.find().fetch()

  for user in users
    for facilitator in facilitators
      for course in courses
        for client in clients
          students = client.students()
            
          registration = 
            studentIds: students.map (s) => s._id 
            courseId: course._id
            facilitatorId: facilitator._id
            owner: user._id

          Registrations.insert registration
          
  resetSessions()
  createSessions()

resetRegistrations = ->
  Registrations.remove {}

createSessions = ->
  registrations = App.Collections.Registrations.find().fetch()

  for registration in registrations
    sessions = registration.course().classes().fetch().map (c) => {
      "class": c
    }
    for session in sessions
      session.registrationId = registration._id
      session.date = chance.date { year: 2016, month : _.sample [ 0, 1, 2 ] }
      Sessions.insert session

resetSessions = ->
  Sessions.remove {}

Fixtures = {
  reset: -> 
    @courses.reset()
    @clients.reset()
    @facilitators.reset()
    @registrations.reset()

  create: -> 
    @courses.create()
    @clients.create()
    @facilitators.create()
    @registrations.create()

  seed: -> 
    Meteor.call 'fixtures/reset', ( error ) ->
      unless error then Meteor.call 'fixtures/create'

  users:
    create: createUsers
    reset: resetUsers
  courses:
    create: createCourses
    reset: resetCourses
  clients:
    create: createClients
    reset: resetClients
  facilitators:
    create: createFacilitators
    reset: resetFacilitators
  registrations:
    create: createRegistrations
    reset: resetRegistrations
}

# Meteor.startup ->
#   if Meteor.users.find().count() is 0 then Fixtures.users.create()
#   Fixtures.seed()

Meteor.methods
  'fixtures/reset': ->
    Fixtures.reset()

  'fixtures/create': ->
    Fixtures.create()

  'fixtures/seed': ->
    Fixtures.seed()