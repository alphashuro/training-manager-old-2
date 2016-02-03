bookings-page
  h2.page-header
    | Bookings
  .text-right
    a.btn.btn-default( href='/bookings/new' ) New Booking

  table.table.table-hover.booking-list
    thead
      tr
        th Course
        th Facilitator
        th Students
        th Next Session
        th Actions
    tbody
      tr( each='{data.bookings}' ).booking-list-item
        td { course().title }
        td { facilitator().name }
        td { students().count() }
        td { nextSession() ? nextSession().calendar() : 'None' }
        td
          a( href="/bookings/detail/{_id}" ).btn.btn-default.view-booking View
          button( onclick='{ parent.remove }' ).btn.btn-danger.delete-booking
            i.glyphicon.glyphicon-trash

  script( type='coffee' ).
    @getMeteorData = ->
      Meteor.subscribe 'bookings'

      bookings: App.Collections.Bookings.find().fetch()
    @mixin 'RiotMeteorData'

    @remove = (e) ->
      { _id, name } = e.item

      App.api.bookings.remove _id
      #if confirm 'You are about to delete a booking, this is irreversible. Continue?'
      #  App.api.bookings.remove _id
