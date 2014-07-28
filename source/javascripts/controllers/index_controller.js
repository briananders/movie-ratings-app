App.IndexController = Ember.ObjectController.extend({

  // $.ajax({
  //   type: 'GET',
  //   url: "https://community-myapifilms-imdb.p.mashape.com/search?title=%@1".fmt(App.get('search')),
  //   headers: {
  //     "X-Mashape-Key": "M7sWO2PM18mshCs0lN6fKcg7d9FAp11NAgRjsnHVmnNDfwEgCy",
  //   },
  //   success: function(data) {
  //     App.set('mashapeImdbData', data);
  //   }
  // });

  // $.ajax({
  //   type: 'POST',
  //   url: "https://byroredux-metacritic.p.mashape.com/search/movie?title=%@1&retry=4&max-pages=2".fmt(App.get('search')),
  //   headers: {
  //     "X-Mashape-Key": "M7sWO2PM18mshCs0lN6fKcg7d9FAp11NAgRjsnHVmnNDfwEgCy",
  //   },
  //   success: function(data) {
  //     App.set('metaCriticData', JSON.stringify(data));
  //   }
  // });

  // $.ajax({
  //   url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=%@1&q=%@2".fmt(App.get('rottenTomatoesApiKey'), encodeURI(App.get('search'))),
  //   dataType: "jsonp",
  //   success: function(data) {
  //     App.set('rottenTomatoesData', JSON.stringify(data));
  //   }
  // });

  // $.ajax({
  //   type: 'GET',
  //   url: "http://www.omdbapi.com/?s=%@1".fmt(App.get('search')),
  //   success: function(data) {
  //     App.set('omdbapiData', data);
  //   }
  // });

  // $.ajax({
  //   type: 'GET',
  //   url: "http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=%@1".fmt(App.get('search')),
  //   contentType: "text/html",
  //   success: function(data) {
  //     App.set('imdbData', data);
  //   }
  // });

  actions: {

    selectedMovie: function(movie) {

      App.set('movie', movie);
      this.transitionToRoute('movie');

    }

  },

});