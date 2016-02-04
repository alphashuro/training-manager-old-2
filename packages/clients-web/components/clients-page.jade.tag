clients-page
  h2.page-header
    | Clients
  .text-right
    a.btn.btn-default( href='/clients/new' ) New Client

  table.table.table-hover
    thead
      tr
        th Name
        th Email
        th Phone
        th Actions
    tbody
      tr( each='{data.clients}' )
        td { name }
        td { email }
        td { phone }
        td
          a( href="/clients/detail/{_id}" ).btn.btn-default View
          button( onlick='{remove}' ).btn.btn-danger
            i.glyphicon.glyphicon-trash

  script( type='coffee' ).
    @getMeteorData = ->
      Meteor.subscribe 'clients'

      clients: App.Collections.Clients.find().fetch()
    @mixin 'RiotMeteorData'

    @remove = (e) ->
      { _id, name } = e.item;

      if confirm 'You are about to delete #{ name }, this is irreversible. Continue?'
        App.api.clients.remove _id, function(error) {
          if (error) {
            return App.utils.notify.error(error.reason);
          } else {
            return App.utils.notify.success('Clients removed');
          }
        })
