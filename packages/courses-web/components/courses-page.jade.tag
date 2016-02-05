courses-page
  h2.page-header
    | Courses
  .text-right
    a.btn.btn-default(href='/courses/new') New Course

  table.table
    thead
      tr
        th Title
        th Description
        th Max Students
        th Total Duration
        th Total Price
        th Actions
    tbody
      tr( each='{data.courses}' )
        td { title }
        td { description }
        td { maxStudents }
        td { duration() } hrs
        td R { price() }
        td
          a( href="/courses/detail/{_id}" ).btn.btn-default View
          button( onclick='{remove}' ).btn.btn-danger
            i.glyphicon.glyphicon-trash

  script( type='coffee' ).
    @getMeteorData = ->
      courses: opts.get.all()
    @mixin 'RiotMeteorData'

    @remove = (e) ->
      { _id, title } = e.item;

      opts.remove _id
