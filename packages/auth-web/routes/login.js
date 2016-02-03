import { routes } from 'meteor/training-manager:lib';

routes["public"].route('/login', {
  name: 'login',
  action: function() {
    return RiotLayout.render('login');
  }
});
