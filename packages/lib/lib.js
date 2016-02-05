import { publicRoutes, privateRoutes } from './imports/route-groups.js';

let api = {};
let Collections = {};
let services = {};
let routes = {
  public: publicRoutes,
  private: privateRoutes,
};
let utils = {};

const App = {
  api,
  Collections,
  services,
  utils,
  routes,
};

export default App;

export { api, Collections, services, utils, routes };
