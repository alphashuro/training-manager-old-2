import { routes } from 'meteor/training-manager:lib';
import auth from '../api/auth.js';

routes.public.route('/signup', {
  name: 'signup',
  action: function signUpRouteAction() {
    RiotLayout.render('signup', auth);
  },
});
