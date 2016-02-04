import notify from './notify.js';

/**
 * Use as default callback when too lazy (or drunk) to type notification code
 * @param  {Error} error      if not null, the error will be alerted to the user
 * @param  {String} message   ( optional )
 *                            Will be displayed to the user on success,
 *                            no alert will be displayed if message not given
 * @return none
 */
function errorCb(error, message) {
  if (error) {
    notify.error(error.reason);
  } else if (message) {
    notify.success(message);
  }
}

export default errorCb;
