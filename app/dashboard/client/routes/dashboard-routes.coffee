App.routes.private.route '/dashboard',
  name: 'dashboard'
  action: ->
    RiotLayout.render 'app-layout',
      main: '<dashboard></dashboard>'