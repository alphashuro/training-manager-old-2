import { utils } from "meteor/training-manager:lib"

const { notify, errorCb } = utils;

function create(booking) {
  return Meteor.call('create/booking', booking, function(error, bookingId) {
    if (error) {
      return utils.notify.error(error.reason);
    } else {
      notify.success('Booking created');
      return FlowRouter.go("/bookings/detail/" + bookingId);
    }
  });
};

function update(booking) {
  throw new Meteor.error('not-implemented', 'updating bookings has not been implemented yet.');
};

function remove(_id) {
  return Meteor.call('remove/booking', _id, function(error) {
    return errorCb(error, 'Booking Removed');
  });
};

function addStudent(arg) {
  var _id, studentId;
  _id = arg._id, studentId = arg.studentId;
  return Meteor.call('addStudent/booking', {
    _id: _id,
    studentId: studentId
  }, function(error) {
    return errorCb(error);
  });
};

function removeStudent(arg) {
  var _id, studentId;
  _id = arg._id, studentId = arg.studentId;
  return Meteor.call('removeStudent/booking', {
    _id: _id,
    studentId: studentId
  }, function(error) {
    return errorCb(error);
  });
};

function updateSession(arg) {
  var date, sessionId;
  sessionId = arg.sessionId, date = arg.date;
  return Meteor.call('update/session', sessionId, {
    date: date
  }, function(error) {
    return errorCb(error);
  });
};


export {
  create, update, remove,
  addStudent, removeStudent,
  updateSession
};
