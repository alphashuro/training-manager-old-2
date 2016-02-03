facilitators-page
  h2.page-header 
    | Facilitators
  .text-right
    a.btn.btn-default(href='/facilitators/new') New Facilitator

  table.table
    thead
      tr
        th Name
        th Phone
        th Email
        th Actions
    tbody
      tr( each='{data.facilitators}' )
        td { name }
        td { phone }
        td { email }
        td
          a( href="/facilitators/detail/{_id}" ).btn.btn-default View
          button( onclick='{remove}' ).btn.btn-danger 
            i.glyphicon.glyphicon-trash

  script( type='coffee' ).
    @getMeteorData = ->
      Meteor.subscribe 'facilitators'

      facilitators: App.Collections.Facilitators.find().fetch()
    @mixin 'RiotMeteorData'

    @remove = (e) ->
      { _id, name } = e.item;

      if confirm("You are about to delete #{ name }, this is irreversible. Continue?") then App.api.facilitators.remove _id