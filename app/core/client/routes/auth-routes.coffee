App.routes.public.route '/signup',
  name: 'signup'
  action: ->
    RiotLayout.render 'signup'

App.routes.public.route '/login',
  name: 'login'
  action: ->
    RiotLayout.render 'login'