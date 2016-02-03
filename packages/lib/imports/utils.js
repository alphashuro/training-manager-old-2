import { privateRoutes } from './route-groups.js';

function createCrudRoute( { plural, singular } ) {
  privateRoutes.route("/" + plural, {
    name: plural,
    action: function() {
      return RiotLayout.render('app-layout', {
        main: "<" + plural + "-page></" + plural + "-page>"
      });
    }
  });
  privateRoutes.route("/" + plural + "/detail/:_id", {
    name: singular + "-detail",
    action: function(params) {
      return RiotLayout.render('app-layout', {
        main: "<" + singular + "-detail " + singular + "_id=" + params._id + "></" + singular + "-detail>"
      });
    }
  });
  privateRoutes.route("/" + plural + "/new", {
    name: "new-" + plural,
    action: function() {
      return RiotLayout.render('app-layout', {
        main: "<new-" + singular + "></new-" + singular + ">"
      });
    }
  });
};

export { createCrudRoute }
