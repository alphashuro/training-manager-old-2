import Clients from 'meteor/training-manager:clients-api';

const { api } = Clients;

let crudApi = Riot.observable();

crudApi.get = {
  all() {
    crudApi.trigger('getting-clients');
    return api.get.all();
  },
  one(_id) {
    crudApi.trigger('getting-client', _id);
    return api.get.one(_id);
  },
};

crudApi.create = (client) => {
  api.create(client, (error, _id) => {
    if (error) crudApi.trigger('creating-client-error', error);
    else crudApi.trigger('creating-client-success', _id);
  });
};

crudApi.update = (client) => {
  api.update(client, (error, updated) => {
    if (error) crudApi.trigger('updating-client-error', error);
    else crudApi.trigger('updating-client-success', updated);
  });
};

crudApi.remove = (_id) => {
  api.remove(_id, (error, removed) => {
    if (error) crudApi.trigger('removing-client-error', error);
    else crudApi.trigger('removing-client-success', removed);
  });
};

export default crudApi;
