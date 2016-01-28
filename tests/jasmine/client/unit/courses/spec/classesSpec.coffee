describe 'Classes API', ->
  _class = {
    _id: '1'
    title: 'Test class'
    description: 'A class used for testing purposes'
    duration: 10
    price: 1000
    courseId: '1'
  }

  describe 'create', ->
    it 'can create a new class', ->
      spyOn Meteor, 'call'

      App.api.classes.create _class

      expect( Meteor.call ).toHaveBeenCalledWith 'create/class', { title: _class.title, description: _class.description, duration: _class.duration, price: _class.price, courseId: _class.courseId } , jasmine.any Function

  describe 'update', ->
    it 'can update a class', ->
      spyOn Meteor, 'call'

      App.api.classes.update _class

      expect( Meteor.call ).toHaveBeenCalledWith 'update/class', _class, jasmine.any Function

  describe 'remove', ->
    it 'can remove a class', ->
      spyOn Meteor, 'call'

      App.api.classes.remove _class._id

      expect( Meteor.call ).toHaveBeenCalledWith 'remove/class', _class._id, jasmine.any Function