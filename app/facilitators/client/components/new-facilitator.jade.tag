new-facilitator
  h2.page-header
    | Add a facilitator

  .col-md-6.col-md-offset-3
    form( onsubmit='{save}' name='addFacilitatorForm')
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
        type='number'
        name='email'
        label='Email')

      button.btn.btn-success Save

  script( type='coffee' ).
    @save = (e) ->
      e.preventDefault()

      { name, phone, email } = addFacilitatorForm

      facilitator = 
        name: name.value
        phone: phone.value
        email: email.value

      App.api.facilitators.create facilitator