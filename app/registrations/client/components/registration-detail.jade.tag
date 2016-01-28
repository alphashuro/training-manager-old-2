registration-detail
  h2.page-header
    | Registration Detail

  .row
    .col-md-6
      h3.page-header Course
      
      p { data.registration.course().title }
    .col-md-6
      h3.page-header Facilitator

      p { data.registration.facilitator().name }
  .row
    .col-md-6
      h3.page-header Learners Booked
        small  ({ data.registration.students().count() })

      .list-group
        a.list-group-item(each='{ data.registration.students().fetch() }' href='#')
          span.badge { client().name }
          | { name }
          p { phone } | { email }
    .col-md-6
      h3.page-header Sessions Scheduled
        small  ({ data.registration.sessions().count() })

      .list-group
        a.list-group-item(each='{ data.registration.sessions().fetch() }' href='#')
          span.badge { calendar() } - { endTime() }
          | { class.title } | { class.duration } hrs
          //p ( R { class.price } )

  script( type='coffee' ).
    @getMeteorData = ->
      Meteor.subscribe 'registration', @opts.registration_id

      registration = Registrations.findOne opts.registration_id

      { registration }
    @mixin 'RiotMeteorData'

    @save = (e) ->
      e.preventDefault()
