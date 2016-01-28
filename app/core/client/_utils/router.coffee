createCrudRoute = ( { plural, singular } ) ->
  App.routes.private.route "/#{plural}", 
    name: plural
    action: ->
      RiotLayout.render 'app-layout',
        main: "<#{plural}-page></#{plural}-page>"

  App.routes.private.route "/#{plural}/detail/:_id",
    name: "#{singular}-detail"
    action: (params) ->
      RiotLayout.render 'app-layout',
        main: "<#{singular}-detail #{singular}_id=#{params._id}></#{singular}-detail>"

  App.routes.private.route "/#{plural}/new",
    name: "new-#{plural}"
    action: ->
      RiotLayout.render 'app-layout',
        main: "<new-#{singular}></new-#{singular}>"

App.utils.crudRoute = createCrudRoute