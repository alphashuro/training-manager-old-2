client-detail
  h2.page-header
    | { data.client.title }

  .row
    .col-md-4
      h3.page-header Details

      form(onsubmit='{save}' name='editClientForm')
        form-control(
          type='text'
          name='name'
          label='Name'
          value='{data.client.name}' )
        form-control(
          type='text'
          name='phone'
          label='Phone'
          value='{data.client.phone}' )
        form-control(
          type='email'
          name='email'
          label='Email'
          value='{data.client.email}')

        button.btn.btn-success Save

    .col-md-8
      h3.page-header 
        | Students
        button.btn.btn-default New

      ul.list-group
        li.list-group-item( each='{data.students}' )
          form
            .form-inline
              form-control(
                type='text'
                name='name'
                label='Name'
                value='{name}')
              form-control(
                type='text'
                name='phone'
                label='Phone'
                value='{phone}')

            button.btn.btn-success Save
            button.btn.btn-danger(type='button' onclick='{remove}')
              i.glyphicon.glyphicon-trash

  script( type='coffee' ).
    @getMeteorData = ->
      Meteor.subscribe 'client', @opts.client_id

      client: App.Collections.Clients.findOne opts.client_id
      students: App.Collections.Students.find({ clientId: opts.client_id }).fetch()
    @mixin 'RiotMeteorData'

    @save = (e) ->
      e.preventDefault()

      { name, phone, email } = @editClientForm

      App.api.clients.update {
        _id: @opts.client_id,  
        name: name.value
        phone: phone.value 
        email: email.value
      }