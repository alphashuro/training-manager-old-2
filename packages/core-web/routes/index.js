import { routes } from 'meteor/training-manager:lib';

routes['public'].route('/', {
  name: 'index',
  action: function() {
    return RiotLayout.render('index');
  }
});
