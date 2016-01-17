publicRoutes = FlowRouter.group()

publicRoutes.route '/',
  name: 'index'
  action: ->
    RiotLayout.render 'index'

publicRoutes.route '/signup',
  name: 'signup'
  action: ->
    RiotLayout.render 'signup'

publicRoutes.route '/login',
  name: 'login'
  action: ->
    RiotLayout.render 'login'