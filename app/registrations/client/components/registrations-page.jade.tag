registrations-page
  h2.page-header
    | Registrations
  .text-right
    a.btn.btn-default( href='/registrations/new' ) New Registration

  table.table.table-hover
    thead
      tr
        th Course
        th Facilitator
        th Students
        th Next Session
        th Actions
    tbody
      tr( each='{data.registrations}' )
        td { course().title }
        td { facilitator().name }
        td { students().count() }
        td { nextSession() ? nextSession().calendar() : 'None' }
        td
          a( href="/registrations/detail/{_id}" ).btn.btn-default View
          button( onlick='{remove}' ).btn.btn-danger
            i.glyphicon.glyphicon-trash

  script( type='coffee' ).
    @getMeteorData = ->
      Meteor.subscribe 'registrations'

      registrations: App.Collections.Registrations.find().fetch()
    @mixin 'RiotMeteorData'

    @remove = (e) ->
      { _id, name } = e.item;

      if confirm 'You are about to delete a registration, this is irreversible. Continue?'
        App.api.registrations.remove _id