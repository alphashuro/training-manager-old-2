/* globals Bert: false */

function error(message) {
  Bert.alert({
    title: 'Error',
    message: message,
    type: 'danger',
    style: 'fixed-top',
  });
}

function success(message) {
  Bert.alert({
    title: 'Success',
    message: message,
    type: 'success',
    style: 'growl-top-right',
  });
}

const notify = {
  error,
  success,
};

export default notify;
export { error as notifyError, success as notifySuccess };
