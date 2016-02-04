new-client
  h2.page-header
    | Add a client

  .col-md-6.col-md-offset-3
    form( onsubmit='{save}' name='addClientForm')
      form-control(
        type='text'
        name='name'
        label='Name'
        )
      form-control(
        type='text'
        name='phone'
        label='Phone')
      form-control(
        type='email'
        name='email'
        label='Email')

      button.btn.btn-success Save

  script( type='coffee' ).
    @save = (e) ->
      e.preventDefault()

      { name, phone, email } = addClientForm

      client =
        name: name.value
        phone: phone.value
        email: email.value

      App.api.clients.create client, (error) ->
          if error
            App.utils.notify.error(error.reason)
          else
            App.utils.notify.success('Client Created!')
            FlowRouter.go('/clients')
