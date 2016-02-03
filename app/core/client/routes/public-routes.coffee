App.routes.public.route '/',
  name: 'index'
  action: ->
    RiotLayout.render 'index'