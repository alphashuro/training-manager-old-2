describe 'Login', ->
  testUser =
    email : 'test@email.com'
    password : 'testpassword'
  
  it 'should call Meteor login API', ->
    spyOn Meteor, 'loginWithPassword'

    App.api.login testUser.email, testUser.password

    expect(Meteor.loginWithPassword).toHaveBeenCalledWith 'test@email.com', 'testpassword', jasmine.any(Function)

  it 'should redirect to /dashboard if login successful', ->
    spyOn( Meteor, 'loginWithPassword' ).and.callFake (email, password, cb) ->
      cb()
    spyOn FlowRouter, 'go'

    App.api.login testUser.email, testUser.password

    expect(FlowRouter.go).toHaveBeenCalledWith '/dashboard'

  it 'should notify of error if login unsuccessful', ->
    spyOn( Meteor, 'loginWithPassword' ).and.callFake (email, password, cb) ->
      cb { reason: 'Login unsuccessful' }
    spyOn App.utils.notify, 'error'

    App.api.login testUser.email, testUser.password

    expect( App.utils.notify.error ).toHaveBeenCalledWith 'Login unsuccessful'

  it 'should not redirect if error is returned', ->
    spyOn( Meteor, 'loginWithPassword' ).and.callFake (email, password, cb) ->
      cb { reason: 'Login unsuccessful' }
    spyOn FlowRouter, 'go'

    App.api.login testUser.email, testUser.password
    expect( FlowRouter.go ).not.toHaveBeenCalled()