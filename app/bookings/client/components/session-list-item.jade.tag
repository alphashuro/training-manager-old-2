session-list-item
  .session-list-item
    span.badge { opts.data.calendar() } - { opts.data.endTime() }
    | { opts.data.class.title } | { opts.data.class.duration } hrs
    .input-group.datetimepicker
      span.input-group-addon
        i.glyphicon.glyphicon-calendar
      input.set-session-date.form-control( type="text" value="02/01/2016 4:21 PM")

  script( type='coffee' ).
    @on 'mount', ->
      $('.datetimepicker').datetimepicker {
        daysOfWeekDisabled: [0, 6]
        sideBySide: true
        minDate: moment()
        showTodayButton: true
        enabledHours: [ 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
      }
