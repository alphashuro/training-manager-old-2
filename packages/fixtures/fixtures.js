// import Chance from 'chance';

// let chance = new Chance('training-app-fixtures');

// function createUsers() {
//   var i, len, org, ref, results, userId, users;
//   users = {
//     orgs: [
//       {
//         org: 'AeP IT',
//         password: 'password',
//         email: 'alpha@aepit.co.za'
//       }
//     ]
//   };
//   ref = users.orgs;
//   results = [];
//   for (i = 0, len = ref.length; i < len; i++) {
//     org = ref[i];
//     userId = Accounts.createUser({
//       email: org.email,
//       password: org.password,
//       profile: {
//         org: org.org
//       }
//     });
//     results.push(Roles.addUsersToRoles(userId, 'admin'));
//   }
//   return results;
// };

// function resetUsers() {
//   return Meteor.users.remove({});
// };

// function createCourses() {
//   var course, courseId, courses, i, j, len, len1, user, users;
//   courses = [
//     {
//       title: 'Course 1',
//       description: 'A course course-like',
//       maxStudents: 10
//     }, {
//       title: 'Course 2',
//       description: 'A course not unlike another course',
//       maxStudents: 20
//     }
//   ];
//   users = Meteor.users.find().fetch();
//   for (i = 0, len = users.length; i < len; i++) {
//     user = users[i];
//     for (j = 0, len1 = courses.length; j < len1; j++) {
//       course = courses[j];
//       course.owner = user._id;
//       courseId = App.Collections.Courses.insert(course);
//     }
//   }
//   return createClasses();
// };

// function resetCourses() {
//   resetClasses();
//   return App.Collections.Courses.remove({});
// };

// function createClasses() {
//   var _class, classes, course, courses, i, len, results;
//   classes = [
//     {
//       title: 'Class 1',
//       description: 'A class for the course',
//       duration: 2,
//       price: 1000
//     }, {
//       title: 'Class 2',
//       description: 'Another class for the course',
//       duration: 4,
//       price: 2000
//     }
//   ];
//   courses = App.Collections.Courses.find().fetch();
//   results = [];
//   for (i = 0, len = courses.length; i < len; i++) {
//     course = courses[i];
//     results.push((function() {
//       var j, len1, results1;
//       results1 = [];
//       for (j = 0, len1 = classes.length; j < len1; j++) {
//         _class = classes[j];
//         _class.courseId = course._id;
//         results1.push(App.Collections.Classes.insert(_class));
//       }
//       return results1;
//     })());
//   }
//   return results;
// };

// function resetClasses() {
//   return App.Collections.Classes.remove({});
// };

// function createClients() {
//   var client, clients, i, j, len, len1, user, users;
//   clients = [
//     {
//       name: 'Client 1',
//       phone: '0161234567',
//       email: 'client1@email.com'
//     }, {
//       name: 'Client 2',
//       phone: '0123134512',
//       email: 'client2@email.com'
//     }
//   ];
//   users = Meteor.users.find().fetch();
//   for (i = 0, len = users.length; i < len; i++) {
//     user = users[i];
//     for (j = 0, len1 = clients.length; j < len1; j++) {
//       client = clients[j];
//       client.owner = user._id;
//       Clients.insert(client);
//     }
//   }
//   return createStudents();
// };

// function resetClients() {
//   resetStudents();
//   return Clients.remove({});
// };

// function createStudents() {
//   var client, clients, i, len, results, student, students;
//   students = [
//     {
//       name: 'Student 1',
//       phone: '0731231242',
//       email: 'student1@anemail.com'
//     }, {
//       name: 'Student 2',
//       phone: '0623983242',
//       email: 'student2@otheremail.com'
//     }
//   ];
//   clients = Clients.find().fetch();
//   results = [];
//   for (i = 0, len = clients.length; i < len; i++) {
//     client = clients[i];
//     results.push((function() {
//       var j, len1, results1;
//       results1 = [];
//       for (j = 0, len1 = students.length; j < len1; j++) {
//         student = students[j];
//         student.clientId = client._id;
//         results1.push(Students.insert(student));
//       }
//       return results1;
//     })());
//   }
//   return results;
// };

// function resetStudents() {
//   return Students.remove({});
// };

// function createFacilitators() {
//   var facilitator, facilitators, i, len, results, user, users;
//   facilitators = [
//     {
//       name: 'Facilitator 1',
//       phone: '1245431451',
//       email: 'facilitator1@email.com'
//     }, {
//       name: 'Facilitator 2',
//       phone: '2322352342',
//       email: 'facilitator2@email.com'
//     }
//   ];
//   users = Meteor.users.find().fetch();
//   results = [];
//   for (i = 0, len = users.length; i < len; i++) {
//     user = users[i];
//     results.push((function() {
//       var j, len1, results1;
//       results1 = [];
//       for (j = 0, len1 = facilitators.length; j < len1; j++) {
//         facilitator = facilitators[j];
//         facilitator.owner = user._id;
//         results1.push(Facilitators.insert(facilitator));
//       }
//       return results1;
//     })());
//   }
//   return results;
// };

// function resetFacilitators() {
//   return Facilitators.remove({});
// };

// function createBookings() {
//   var booking, client, clients, course,
//   courses, facilitator, facilitators,
//   i, j, k, l, len, len1, len2, len3, students, user, users;
//   users = Meteor.users.find().fetch();
//   courses = App.Collections.Courses.find().fetch();
//   clients = App.Collections.Clients.find().fetch();
//   facilitators = App.Collections.Facilitators.find().fetch();
//   for (i = 0, len = users.length; i < len; i++) {
//     user = users[i];
//     for (j = 0, len1 = facilitators.length; j < len1; j++) {
//       facilitator = facilitators[j];
//       for (k = 0, len2 = courses.length; k < len2; k++) {
//         course = courses[k];
//         for (l = 0, len3 = clients.length; l < len3; l++) {
//           client = clients[l];
//           students = client.students();
//           booking = {
//             studentIds: students.map(function(s) {
//               return s._id;
//             }),
//             courseId: course._id,
//             facilitatorId: facilitator._id,
//             owner: user._id
//           };
//           Bookings.insert(booking);
//         }
//       }
//     }
//   }
//   return createSessions();
// };

// function resetBookings() {
//   resetSessions();
//   return Bookings.remove({});
// };

// function createSessions() {
//   var booking, bookings, i, len, results, session, sessions;
//   bookings = App.Collections.Bookings.find().fetch();
//   results = [];
//   for (i = 0, len = bookings.length; i < len; i++) {
//     booking = bookings[i];
//     sessions = booking.course().classes().fetch().map(function(c) {
//       return {
//         "class": c
//       };
//     });
//     results.push((function() {
//       var j, len1, results1;
//       results1 = [];
//       for (j = 0, len1 = sessions.length; j < len1; j++) {
//         session = sessions[j];
//         session.bookingId = booking._id;
//         session.date = chance.date({
//           year: 2016,
//           month: _.sample([0, 1, 2])
//         });
//         results1.push(Sessions.insert(session));
//       }
//       return results1;
//     })());
//   }
//   return results;
// }

// function resetSessions() {
//   return Sessions.remove({});
// }

// const Fixtures = {
//   reset() {
//       this.courses.reset();
//       this.clients.reset();
//       this.facilitators.reset();
//       this.bookings.reset();
//   },
//   create() {
//     this.courses.create();
//     this.clients.create();
//     this.facilitators.create();
//     this.bookings.create();
//   },
//   seed() {
//     return Meteor.call('fixtures/reset', function resetFixturesCb(error) {
//       if (!error) {
//         Meteor.call('fixtures/create');
//       }
//     });
//   },
//   users: {
//     create: createUsers,
//     reset: resetUsers
//   },
//   courses: {
//     create: createCourses,
//     reset: resetCourses
//   },
//   clients: {
//     create: createClients,
//     reset: resetClients
//   },
//   facilitators: {
//     create: createFacilitators,
//     reset: resetFacilitators
//   },
//   bookings: {
//     create: createBookings,
//     reset: resetBookings
//   }
// };

// Meteor.methods({
//   'fixtures/reset'() {
//     Fixtures.reset();
//   },
//   'fixtures/create'() {
//     Fixtures.create();
//   },
//   'fixtures/seed'() {
//     Fixtures.seed();
//   },
//   'users/seed'() {
//     Fixtures.users.reset();
//     Fixtures.users.create();
//   },
//   'bookings/seed'() {
//     Fixtures.bookings.reset();
//     Fixtures.bookings.create();
//   }
// });
