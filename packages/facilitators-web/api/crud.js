import Facilitators from 'meteor/training-manager:facilitators-api';

const { api } = Facilitators;

let crudApi = Riot.observable();

crudApi.get = {
  all() {
    crudApi.trigger('getting-facilitators');
    return api.get.all();
  },
  one(_id) {
    crudApi.trigger('getting-facilitator', _id);
    return api.get.one(_id);
  },
};

crudApi.create = (facilitator) => {
  api.create(facilitator, (error, _id) => {
    if (error) crudApi.trigger('creating-facilitator-error', error);
    else crudApi.trigger('creating-facilitator-success', _id);
  });
};

crudApi.update = (facilitator) => {
  api.update(facilitator, (error, updated) => {
    if (error) crudApi.trigger('updating-facilitator-error', error);
    else crudApi.trigger('updating-facilitator-success', updated);
  });
};

crudApi.remove = (_id) => {
  api.remove(_id, (error, removed) => {
    if (error) crudApi.trigger('removing-facilitator-error', error);
    else crudApi.trigger('removing-facilitator-success', removed);
  });
};

export default crudApi;
