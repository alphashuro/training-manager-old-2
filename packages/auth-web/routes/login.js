import { routes } from 'meteor/training-manager:lib';
import auth from '../api/auth.js';

routes.public.route('/login', {
  name: 'login',
  action() {
    RiotLayout.render('login', auth);
  },
});
