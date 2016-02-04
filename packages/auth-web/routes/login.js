import { routes } from 'meteor/training-manager:lib';

routes.public.route('/login', {
  name: 'login',
  action() {
    RiotLayout.render('login');
  },
});
