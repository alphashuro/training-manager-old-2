courses-page
  h2.page-header 
    | Courses
    .text-right
      a.btn.btn-default(href='/courses/new') New Course

  table.table.table-hover
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
      Meteor.subscribe 'courses'

      courses: App.Collections.Courses.find().fetch()
    @mixin 'RiotMeteorData'

    @remove = (e) ->
      { _id, name } = e.item;

      if confirm("You are about to delete #{ name }, this is irreversible. Continue?") then App.api.courses.remove _id