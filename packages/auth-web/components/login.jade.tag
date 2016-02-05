login
  .container
    .row
      .col-md-6.col-md-offset-3
        .text-center
          h1.page-header Login

        form(onsubmit='{login}' name='loginForm')
          form-control( type='email' name='email' label='Email Address' )
          form-control( type='password' name='password' label='Password' )
          button.btn.btn-success Login
          a.btn.btn-default( href='/signup' ) Sign Up

  script(type='coffee').
    @login = (e) ->
      e.preventDefault();

      opts.login({
        email: loginForm.email.value,
        password: loginForm.password.value,
      });
