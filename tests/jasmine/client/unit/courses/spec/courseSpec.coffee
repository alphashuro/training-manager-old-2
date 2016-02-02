describe 'Courses API', ->
  course = {
    _id: '1'
    title: 'Test Course'
    description: 'A course used for testing purposes'
    maxStudents: 10
  }

  describe 'create', ->
    it 'can create a new course', ->
      spyOn Meteor, 'call'

      App.api.courses.create course

      expect( Meteor.call ).toHaveBeenCalledWith 'create/course', { title: course.title, description: course.description, maxStudents: course.maxStudents } , jasmine.any Function

  describe 'update', ->
    it 'can update a course', ->
      spyOn Meteor, 'call'

      App.api.courses.update course

      expect( Meteor.call ).toHaveBeenCalledWith 'update/course', course, jasmine.any Function

  describe 'remove', ->
    it 'can remove a course', ->
      spyOn Meteor, 'call'

      App.api.courses.remove course._id

      expect( Meteor.call ).toHaveBeenCalledWith 'remove/course', course._id, jasmine.any Function