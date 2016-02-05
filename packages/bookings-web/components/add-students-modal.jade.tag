add-students-modal
  button.btn.btn-primary.add-students( type='button' data-toggle='modal' data-target='modal' onclick='{show}' ) Add Learners

  #modal.modal.fade( tabindex='-1' role='dialog' aria-labelledby="modalLabel" )
    .modal-dialog(role='document')
      .modal-content
        .modal-header
          button.close(type='button' data-dismiss='modal' aria-label='Close')
            span(aria-hidden='true') &times
          h4#modalLabel.modal-title Add Learners
        .modal-body
            .row
              .col-md-6
                .form-group
                  label( for='clientSelect' ) Client
                  select.form-control.select-client( name='clientSelect' onchange='{ clientChanged }' style='width: 200px;')
                    option Clients
                    option( each='{ data.clients }' value='{ _id }' ) { name }
              .col-md-6
                .form-group
                  h4 Students
                  .list-group
                    .list-group-item( each='{ data.students }' ) { name }
                      label.btn.btn-primary
                        input( type='checkbox' autocomplete='off' checked="{ parent.data.booking.studentIds.includes(_id) }" onchange="{ parent.studentToggled }" )
                        | { parent.data.booking.studentIds.includes( _id ) ? "Added" : "Not Added" }

        .modal-footer
          button.btn.btn-default(type='button' data-dismiss='modal') Close

  script(type='es6').
    import bookingsCrud from 'meteor/training-manager:bookings-web/api/crud.js';
    import clientsCrud from 'meteor/training-manager:clients-web/api/crud.js';
    opts.bookings = bookingsCrud;
    opts.clients = clientsCrud;

  script( type='coffee' ).
    @selectedClient = ''

    @getMeteorData = ->
      booking = opts.bookings.get.one @opts.booking_id
      clients = opts.clients.get.all();
      students = opts.clients.get.one( @selectedClient )?.students()?.fetch()

      return {
        booking
        clients
        students
      }

    @mixin 'RiotMeteorData'

    @clientChanged = (e) ->
      @selectedClient = e.currentTarget?.value

    @studentToggled = (e) ->
      student = e.item
      if e.target.checked
        opts.on_add student
      else
        opts.on_remove student

    @show = ->
      $( @modal ).modal(
        show: true
      )
