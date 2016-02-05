import Bookings from 'meteor/training-manager:bookings-api';

const { api } = Bookings;

let crudApi = Riot.observable();

crudApi.get = {
  all() {
    crudApi.trigger('getting-bookings');
    return api.get.all();
  },
  one(_id) {
    crudApi.trigger('getting-booking', _id);
    return api.get.one(_id);
  },
};

crudApi.create = (booking) => {
  api.create(booking, (error, _id) => {
    if (error) crudApi.trigger('creating-booking-error', error);
    else crudApi.trigger('creating-booking-success', _id);
  });
};

crudApi.update = (booking) => {
  api.update(booking, (error, updated) => {
    if (error) crudApi.trigger('updating-booking-error', error);
    else crudApi.trigger('updating-booking-success', updated);
  });
};

crudApi.remove = (_id) => {
  api.remove(_id, (error, removed) => {
    if (error) crudApi.trigger('removing-booking-error', error);
    else crudApi.trigger('removing-booking-success', removed);
  });
};

export default crudApi;
