App.SearchRoute = Ember.Route.extend({

  model: function(params) {

    return $.ajax({
      url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=%@1&q=%@2".fmt(App.get('rottenTomatoesApiKey'), encodeURI(params.search_term)),
      dataType: "jsonp",
      success: function(data) {
        App.set('rottenTomatoesData', JSON.stringify(data));
        return data;
      }
    });
  }

})