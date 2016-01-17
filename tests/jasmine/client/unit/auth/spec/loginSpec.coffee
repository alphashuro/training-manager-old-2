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