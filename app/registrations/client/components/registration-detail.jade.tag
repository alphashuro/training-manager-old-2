registration-detail
  h2.page-header
    | Registration Detail

  .row
    .col-md-6
      h3.page-header Course
    .col-md-6
      h3.page-header Facilitator

  .row
    .col-md-6
      h3.page-header Learners Booked
    .col-md-6
      h3.page-header Sessions Scheduled

  script( type='coffee' ).
    @getMeteorData = ->
      Meteor.subscribe 'registration', @opts.registration_id

      registration = Registrations.findOne opts.registration_id
      sessions = registration.sessions().fetch()

      { registration, sessions }
    @mixin 'RiotMeteorData'

    @save = (e) ->
      e.preventDefault()
