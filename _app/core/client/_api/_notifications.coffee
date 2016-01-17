error = (message) -> Bert.alert {
  title: 'Error'
  message,
  type: 'danger'
  style: 'fixed-top'
}

App.utils.notify = {
  error
}