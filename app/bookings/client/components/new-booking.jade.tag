new-booking
  h2.page-header New Booking

  form( onsubmit='{save}' name='addBookingForm' )
    .row
      .col-md-6
        .form-group
          label( for='courseSelect' ) Select Course
          select.form-control( name='courseSelect' onchange='{ courseChanged }' )
            option Course
            option( each='{ data.courses }' value='{ _id }' ) { title }
      .col-md-6
        .form-group
          label( for='facilitatorSelect' ) Select Facilitator
          select.form-control( name='facilitatorSelect' )
            option Facilitator
            option( each='{ data.facilitators }' value='{ _id }' ) { name }
    button.btn.btn-success Save

    //-   .col-md-6
    //-     h3 Schedule classes
    //-     .list-group
    //-       .list-group.item(each='{ data.sessions }')
    //-         p { class.title }

  script( type='coffee' ).
    @selectedCourse = ''

    @getMeteorData = ->

      Meteor.subscribe 'courses'
      courses = Courses.find().fetch()
      sessions = Courses.findOne(@selectedCourse)?.classes().fetch().map c => { "class": c }

      Meteor.subscribe 'facilitators'
      facilitators = Facilitators.find().fetch()

      Meteor.subscribe 'clients'
      clients = Clients.find().fetch()
      students = Clients.findOne(@selectedClient)?.students().fetch()

      return { courses, facilitators, clients, students, sessions }

    @mixin 'RiotMeteorData'

    @on 'mount', ->
      $('select').select2()
      $('select[name=studentsSelect]').select2(
        multiple: true
      )

    @courseChanged = (e) ->
      @selectedCourse = e.currentTarget?.value

    @save = (e) ->
      e.preventDefault()

      { courseSelect, facilitatorSelect } = addBookingForm

      booking =
        courseId: courseSelect.value
        facilitatorId: facilitatorSelect.value

      App.api.bookings.create booking
