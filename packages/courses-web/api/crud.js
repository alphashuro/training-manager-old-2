import Courses from 'meteor/training-manager:courses-api';

const { api } = Courses;

let crudApi = Riot.observable();

crudApi.get = {
  all() {
    crudApi.trigger('getting-courses');
    return api.get.all();
  },
  one(_id) {
    crudApi.trigger('getting-course', _id);
    return api.get.one(_id);
  },
};

crudApi.create = (course) => {
  api.create(course, (error, _id) => {
    if (error) crudApi.trigger('creating-course-error', error);
    else crudApi.trigger('creating-course-success', _id);
  });
};

crudApi.update = (course) => {
  api.update(course, (error, updated) => {
    if (error) crudApi.trigger('updating-course-error', error);
    else crudApi.trigger('updating-course-success', updated);
  });
};

crudApi.remove = (_id) => {
  api.remove(_id, (error, removed) => {
    if (error) crudApi.trigger('removing-course-error', error);
    else crudApi.trigger('removing-course-success', removed);
  });
};

export default crudApi;
