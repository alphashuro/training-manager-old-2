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
        add-students-modal( name='addStudentsModal' booking_id="{ opts.booking_id }" on_add="{ addStudent }" on_remove="{ removeStudent }" )

      .list-group
        a.list-group-item(each='{ data.booking.students().fetch() }' href='#')
          span.badge { client().name }
          | { name }
          p { phone } | { email }
    .col-md-6
      h3.page-header Sessions Scheduled

      .list-group
        session-list-item.list-group-item( each='{ data.booking.sessions().fetch() }' data="{ this }" )

  script( type='coffee' ).
    @getMeteorData = ->
      Meteor.subscribe 'booking', @opts.booking_id

      booking = Bookings.findOne opts.booking_id

      { booking }
    @mixin 'RiotMeteorData'



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
