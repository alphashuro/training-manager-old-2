booking-detail
  h2.page-header
    | Booking Detail

  .row
    .col-md-6
      h3.page-header Course

      p { data.booking.course().title }
    .col-md-6
      h3.page-header Facilitator

      p { data.booking.facilitator().name }
  .row
    .col-md-6
      h3.page-header Learners Booked
        small  ({ data.booking.students().count() })
        add-students-modal(
          name='addStudentsModal'
          booking_id="{ opts.booking_id }"
          on_add="{ addStudent }"
          on_remove="{ removeStudent }"
        )

      .list-group
        .list-group-item(
          each='{ data.booking.students().fetch() }' href='#'
        )
          span.badge { client().name }
          | { name }
          button.btn.btn-danger( onclick='{ removeStudent.bind( null, this ) }' ) Remove
          p { phone } | { email }

    .col-md-6
      h3.page-header Sessions Scheduled

      .list-group
        .list-group-item(
          onclick="{ parent.changeDate }"
          each='{ data.sessions }'
          data="{ this }"
          style='cursor:pointer' )
            p { class.title }
            p { calendar() } - { endTime() }
      change-date-modal(onsetdate="{ setDate }")

  script( type='coffee' ).
    @getMeteorData = ->
      Meteor.subscribe 'booking', @opts.booking_id

      booking = Bookings.findOne opts.booking_id

      sessions = booking.sessions().fetch()

      { booking, sessions }
    @mixin 'RiotMeteorData'

    @changeDate = (e) =>
      { _id, date } = e.item
      @tags['change-date-modal'].show( { sessionId: _id, date } )

    @setDate = ({ sessionId, date }) ->
      App.api.bookings.updateSession({
        sessionId,
        date
      })

    @addStudent = (student) ->
      App.api.bookings.addStudent {
        _id: opts.booking_id,
        studentId: student._id
      }

    @removeStudent = (student) ->
      App.api.bookings.removeStudent {
        _id: opts.booking_id,
        studentId: student._id
      }

    @save = (e) ->
      e.preventDefault()
