App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['gearA.htm', 'gearB.htm', 'mount.htm'];
  }
});