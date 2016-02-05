import { routes } from 'meteor/training-manager:lib';

routes.public.route('/', {
  name: 'index',
  action() {
    RiotLayout.render('index');
  },
});
