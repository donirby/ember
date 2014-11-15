App = Ember.Application.create();

App.Router.map(function() {
  this.route("artist");
});

App.ArtistRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        artist: "gearA.htm",
        work: "Gear A"
      }, {
        artist: "gearB.htm",
        work: "Gear B"
      }, {
        artist: "mount.htm",
        work: "Motor Mount"
      }
    ];
  }
});

App.ArtistInfoComponent = Ember.Component.extend({
  tagName: "li",
  classNames: "artistList"
});