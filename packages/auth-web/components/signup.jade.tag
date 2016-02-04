signup
  .container
    .row
      .col-md-6.col-md-offset-3
        .text-center
          h1.page-header Signup

        form( onsubmit='{signup}' name='signupForm' )
          form-control( type='text' name='org' label='Organization/Company Name*' )
          form-control( type='email' name='email' label='Email Address*' )
          form-control( type='password' name='password' label='Password*' )

          button.btn.btn-success Sign Up
          a.btn.btn-default( href='/login' ) Login

  script( type='coffee' ).
    @signup = (e) ->
      e.preventDefault();

      { org, email, password } = signupForm

      user = {
        email: email.value
        password: password.value
        org: org.value
      }

      App.api.signup user, ( error ) ->
        unless error
          App.api.login user.email, user.password
        else
          App.utils.notify.error error.reason
