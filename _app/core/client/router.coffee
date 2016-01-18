App.routes.public = FlowRouter.group()

App.routes.public.route '/',
  name: 'index'
  action: ->
    RiotLayout.render 'index'

App.routes.public.route '/signup',
  name: 'signup'
  action: ->
    RiotLayout.render 'signup'

App.routes.public.route '/login',
  name: 'login'
  action: ->
    RiotLayout.render 'login'

App.routes.private = FlowRouter.group()

App.routes.private.route '/dashboard',
  name: 'dashboard'
  action: ->
    RiotLayout.render 'app-layout',
      main: '<dashboard></dashboard>'