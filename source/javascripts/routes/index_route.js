App.IndexRoute = Ember.Route.extend({

  model: function(params) {
    return $.ajax({
      url: "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=%@1".fmt(App.get('rottenTomatoesApiKey')),
      dataType: "jsonp",
      success: function(data) {
        return data;
      }
    });
  }

});