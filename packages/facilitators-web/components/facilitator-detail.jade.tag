facilitator-detail
  h2.page-header
    | { data.facilitator.name }

  .row
    .col-md-4
      h3.page-header Details

      form(onsubmit='{save}' name='editFacilitatorForm')
        form-control(
          type='text'
          name='name'
          label='Name'
          value='{data.facilitator.name}' )
        form-control(
          type='text'
          name='phone'
          label='Phone'
          value='{data.facilitator.phone}' )
        form-control(
          type='email'
          name='email'
          label='Email'
          value='{data.facilitator.email}')

        button.btn.btn-success Save

    .col-md-8

  script( type='coffee' ).
    @getMeteorData = ->
      facilitator: opts.get.one opts.facilitator_id
    @mixin 'RiotMeteorData'

    @save = (e) ->
      e.preventDefault()

      { name, email, phone } = @editFacilitatorForm

      opts.update {
        _id: @opts.facilitator_id,
        name: name.value
        phone: phone.value
        email: email.value
      }
