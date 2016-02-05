change-date-modal
  #changedatemodal.modal.fade(
    tabindex='-1'
    role='dialog'
    aria-labelledby="modalLabel"
  )
    .modal-dialog(role='document')
      .modal-content
        .modal-header
          button.close(type='button' data-dismiss='modal' aria-label='Close')
            span(aria-hidden='true') &times
          h4#modalLabel.modal-title Set Date
        .modal-body
          #datetimepicker.input-group.datetimepicker
            span.input-group-addon
              i.glyphicon.glyphicon-calendar
            input.set-session-date.form-control( type="text" )

        .modal-footer
          button.btn.btn-default(type='button' data-dismiss='modal') Close
          button.btn.btn-success(type='button' onclick='{setDate}') Set

  script( type='coffee' ).
    @on 'mount', ->
      $( @datetimepicker ).datetimepicker {
        daysOfWeekDisabled: [0, 6]
        sideBySide: true
        minDate: moment()
        showTodayButton: true
        enabledHours: [ 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
      }

    @show = ( { sessionId, date } ) ->
      @sessionId = sessionId

      $( @datetimepicker ).data("DateTimePicker").date(date)

      $( @changedatemodal ).modal(
        show: true
      )

    @setDate = =>
      date = $( @datetimepicker ).data("DateTimePicker").date().toDate()
      @opts.onsetdate( {
        sessionId : @sessionId,
        date
      } )
