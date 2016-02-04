import { routes } from 'meteor/training-manager:lib';

routes.public.route('/signup', {
  name: 'signup',
  action: function signUpRouteAction() {
    RiotLayout.render('signup');
  },
});
