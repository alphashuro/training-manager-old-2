nav-menu
  nav.navbar.navbar-default
    .container-fluid
      .navbar-header
        button.navbar-toggle.collapsed(
          type='button' 
          data-toggle='collapse' 
          data-target='#main-navbar' 
          aria-expanded='false')
          span.sr-only Toggle navigation
          span.icon-bar
          span.icon-bar
          span.icon-bar

        a.navbar-brand( href='#' ) { data.org.name }

      #main-navbar.collapse.navbar-collapse
        ul.nav.navbar-nav
          li( role='presentation' )
            a(href='/dashboard') Dashboard
          li( role='presentation' )
            a(href='/courses') Courses
          li( role='presentation' )
            a(href='/clients') Clients
          li( role='presentation' )
            a(href='/facilitators') Facilitators
          li( role='presentation' )
            a(href='/registrations') Registrations
        
        ul.nav.navbar-nav.navbar-right
          li.dropdown
            a.dropdown-toggle(
              href='#' 
              data-toggle='dropdown' 
              role='button' 
              aria-haspopup='true' 
              aria-expanded='false' ) 
              | { data.user.emails[0].address }
              span.caret
            ul.dropdown-menu
              li
                a( href='/profile' ) Profile
              li
                a( href='#' onclick='{ logout }' ) Logout

  script( type='coffee' ).
    @getMeteorData = ->
      user = Meteor.user()

      unless user
        FlowRouter.go 'login'

      org = App.Collections.Orgs.findOne user.profile.orgId

      { user, org }
    @mixin 'RiotMeteorData'

    @logout = ->
      App.api.logout()