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
    @getMeteorData = =>
      facilitators: opts.get.all()
    @mixin 'RiotMeteorData'

    @remove = (e) ->
      opts.remove e.item._id
