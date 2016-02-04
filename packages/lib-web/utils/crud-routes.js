import { routes } from 'meteor/training-manager:lib';

function createCrudRoutes({ plural, singular }) {
  routes.private.route(`/${plural}`, {
    name: plural,
    action() {
      RiotLayout.render('app-layout', {
        main: `<${plural}-page></${plural}-page>`,
      });
    },
  });

  routes.private.route(`/${plural}/detail/:_id`, {
    name: `${singular}-detail`,
    action(params) {
      RiotLayout.render('app-layout', {
        main:
          `<${singular}-detail ${singular}_id=${params._id}>
          </${singular}-detail>`,
      });
    },
  });

  routes.private.route(`/${plural}/new`, {
    name: `new-${singular}`,
    action() {
      RiotLayout.render('app-layout', {
        main: `<new-${singular}></new-${singular}>`,
      });
    },
  });
}

export default createCrudRoutes;
