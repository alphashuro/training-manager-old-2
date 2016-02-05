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
      bookings: opts.get.all()
    @mixin 'RiotMeteorData'

    @remove = (e) ->
      { _id, name } = e.item

      opts.remove _id
