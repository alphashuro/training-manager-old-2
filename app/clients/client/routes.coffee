# App.routes.private.route '/clients',
#   name: 'clients'
#   action: ->
#     RiotLayout.render 'app-layout',
#       main: '<clients-page></clients-page>'

# App.routes.private.route '/clients/detail/:_id',
#   name: 'client-detail'
#   action: (params) ->
#     RiotLayout.render 'app-layout',
#       main: "<client-detail client_id=#{params._id}></client-detail>"

# App.routes.private.route '/clients/new',
#   name: 'new-client'
#   action: ->
#     RiotLayout.render 'app-layout',
#       main: '<new-client></new-client>'

App.utils.crudRoute 
  plural: 'clients'
  singular: 'client'