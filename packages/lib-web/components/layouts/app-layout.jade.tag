app-layout
  nav-menu(
    getCurrentUser="{Meteor.user}"
    logout="{Meteor.logout}"
  )
  .container
    #main
