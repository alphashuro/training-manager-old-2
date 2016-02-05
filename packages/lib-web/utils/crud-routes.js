import { routes } from 'meteor/training-manager:lib';

function createCrudRoutes({ plural, singular, crudApi }) {
  routes.private.route(`/${plural}`, {
    name: plural,
    action() {
      let api = {};
      _.extend(api, crudApi, {
        main: `<${plural}-page></${plural}-page>`,
      });
      RiotLayout.render( 'app-layout', api );
    },
  });

  routes.private.route(`/${plural}/detail/:_id`, {
    name: `${singular}-detail`,
    action(params) {
      let api = {};
      _.extend(api, crudApi, {
        main:
          `<${singular}-detail ${singular}_id=${params._id}>
          </${singular}-detail>`,
      });
      RiotLayout.render('app-layout', api );
    },
  });

  routes.private.route(`/${plural}/new`, {
    name: `new-${singular}`,
    action() {
      let api = {};
      _.extend(api, crudApi, {
        main: `<new-${singular}></new-${singular}>`,
      });
      RiotLayout.render('app-layout', api );
    },
  });
}

export default createCrudRoutes;
