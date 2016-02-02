describe 'Authentication api', ->
  describe 'Signup', ->
    testUser =
      email : 'test@email.com'
      password : 'testpassword'
      org: 'testOrg'

    signup = ->
      App.api.signup { 
        email: testUser.email
        password: testUser.password
        profile:
          org: testUser.org
      }

    it 'should call Accounts.createUser', ->
      spyOn Accounts, 'createUser'

      signup()

      expect( Accounts.createUser ).toHaveBeenCalledWith { email: "test@email.com", password: "testpassword", profile: { org: 'testOrg' } }, jasmine.any Function

    it 'should add admin role to newly created user', ->
      spyOn( Accounts, 'createUser' ).and.callFake ( options, cb ) ->
        cb(null, '1')
      spyOn( Roles, 'addUsersToRoles' )

      signup()

      expect( Roles.addUsersToRoles ).toHaveBeenCalledWith '1', 'admin', 'testOrg'

    it 'should redirect to dashboard after user created', ->
      spyOn( Accounts, 'createUser' ).and.callFake ( options, cb ) ->
        cb(null, '1')
      spyOn( FlowRouter, 'go' )

      signup()

      expect( FlowRouter.go ).toHaveBeenCalledWith '/dashboard'

    it 'should fail to create user and notify of error if org not specified', ->
      spyOn Accounts, 'createUser'
      spyOn App.utils.notify, 'error'

      App.api.signup {
        email: testUser.email 
        password: testUser.password 
        profile: {}
      }

      expect( App.utils.notify.error ).toHaveBeenCalled()
      expect( Accounts.createUser ).not.toHaveBeenCalled()

    it 'should fail to create user and notify of error if email or password not specified', ->
      spyOn Accounts, 'createUser'
      spyOn App.utils.notify, 'error'

      App.api.signup {
        email: ''
        password: testUser.password
        profile: 
          org: testUser.org 
      }

      expect( App.utils.notify.error ).toHaveBeenCalled()
      expect( Accounts.createUser ).not.toHaveBeenCalled()

      App.api.signup {
        email: testUser.email
        password: ''
        profile:
          org: testUser.org
      }

      expect( App.utils.notify.error ).toHaveBeenCalled()
      expect( Accounts.createUser ).not.toHaveBeenCalled()