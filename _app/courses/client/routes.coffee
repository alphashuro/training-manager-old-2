App.routes.private.route '/courses',
  name: 'courses'
  action: ->
    RiotLayout.render 'app-layout',
      main: '<courses-page></courses-page>'

App.routes.private.route '/courses/detail/:_id',
  name: 'course-detail'
  action: (params) ->
    RiotLayout.render 'app-layout',
      main: "<course-detail course_id=#{params._id}></course-detail>"

App.routes.private.route '/courses/new',
  name: 'new-course'
  action: ->
    RiotLayout.render 'app-layout',
      main: '<new-course></new-course>'