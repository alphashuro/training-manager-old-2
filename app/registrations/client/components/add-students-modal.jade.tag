add-students-modal
  button.btn.btn-primary( type='button' data-toggle='modal' data-target='modal' onclick='{show}' ) Add Learners

  #modal.modal.fade( tabindex='-1' role='dialog' aria-labelledby="modalLabel" )
    .modal-dialog(role='document')
      .modal-content
        .modal-header
          button.close(type='button' data-dismiss='modal' aria-label='Close')
            span(aria-hidden='true') &times
          h4#modalLabel.modal-title Add Learners
        .modal-body
          p One fine body&hellip;
        .modal-footer
          button.btn.btn-default(type='button' data-dismiss='modal') Close

  script( type='coffee' ).
    @getMeteorData = ->
      Meteor.subscribe 'clients'
      clients = Clients.find().fetch()

      return {
        clients
      }

    @show = ->
      $(@modal).modal( 
        show: true 
        backdrop: 'static'
        keyboard: false
      )