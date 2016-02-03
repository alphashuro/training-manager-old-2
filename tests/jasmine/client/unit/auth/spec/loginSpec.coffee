describe 'Authentication api', ->
  describe 'Login', ->
    testUser =
      email : 'test@email.com'
      password : 'testpassword'

    login = ->
      App.api.login testUser.email, testUser.password
      
    
    it 'should call Meteor.loginWithPassword', ->
      spyOn Meteor, 'loginWithPassword'

      login()

      expect(Meteor.loginWithPassword).toHaveBeenCalledWith 'test@email.com', 'testpassword', jasmine.any(Function)

    it 'should redirect to /dashboard if login successful', ->
      spyOn( Meteor, 'loginWithPassword' ).and.callFake (email, password, cb) ->
        cb()
      spyOn FlowRouter, 'go'

      login()

      expect(FlowRouter.go).toHaveBeenCalledWith '/dashboard'

    it 'should notify of error if login unsuccessful', ->
      spyOn( Meteor, 'loginWithPassword' ).and.callFake (email, password, cb) ->
        cb { reason: 'Login unsuccessful' }
      spyOn App.utils.notify, 'error'

      login()

      expect( App.utils.notify.error ).toHaveBeenCalledWith 'Login unsuccessful'

    it 'should not redirect if error is returned', ->
      spyOn( Meteor, 'loginWithPassword' ).and.callFake (email, password, cb) ->
        cb { reason: 'Login unsuccessful' }
      spyOn FlowRouter, 'go'

      login()

      expect( FlowRouter.go ).not.toHaveBeenCalled()

    it 'should fail to login and notify error if email or password blank', ->
      spyOn( Meteor, 'loginWithPassword' )
      spyOn App.utils.notify, 'error'

      App.api.login '', testUser.password

      expect( App.utils.notify.error ).toHaveBeenCalled()
      expect( Meteor.loginWithPassword ).not.toHaveBeenCalled()

      App.api.login testUser.email, ''

      expect( App.utils.notify.error ).toHaveBeenCalled()
      expect( Meteor.loginWithPassword ).not.toHaveBeenCalled()

  describe 'Logout', ->
    it 'should be able to logout', ->
      spyOn( Meteor, 'logout' )

      App.api.logout()

      expect( Meteor.logout ).toHaveBeenCalled()