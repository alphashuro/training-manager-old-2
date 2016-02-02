App = {
  api: {},
  Collections: {},
  Services: {},
  utils: {},
  routes: {
    public : FlowRouter.group(),
    private : FlowRouter.group()
  }
};

var global = this;

global.App = App
