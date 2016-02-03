error = (message) -> Bert.alert({
  title: 'Error'
  message,
  type: 'danger'
  style: 'fixed-top'
})

success = (message) -> Bert.alert({
  title: 'Success'
  message,
  type: 'success'
  style: 'growl-top-right'
})

App.utils.notify = {
  error,
  success
}

App.utils.errorCb = ( error, message ) ->
  if error
    App.utils.notify.error( error.reason )
  else if message then App.utils.notify.success message
