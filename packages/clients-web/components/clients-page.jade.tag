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

      clients: opts.get.all()
    @mixin 'RiotMeteorData'

    @remove = (e) ->
      { _id, name } = e.item;

      opts.remove _id
