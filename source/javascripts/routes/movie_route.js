App.MovieRoute = Ember.Route.extend({

  model: function(params) {

    var payload = Ember.ObjectProxy.create({
          imdb: null,
          rotten: null,
          critic: null,
        }),
        imdbId = App.get('movie.alternate_ids.imdb'),
        tomatoId = App.get('movie.id'),
        title = App.get('movie.title');

    $.ajax({
      type: 'POST',
      url: "https://byroredux-metacritic.p.mashape.com/search/movie?title=%@1&retry=4&max-pages=2".fmt(title),
      headers: {
        "X-Mashape-Key": "M7sWO2PM18mshCs0lN6fKcg7d9FAp11NAgRjsnHVmnNDfwEgCy",
      },
      success: function(data) {
        if(data.count == 1) {
          payload.set("critic", data.results[0]);
        } else if (data.count > 1) {
          data.results.forEach(function(movie){
            if(movie.name.toLowerCase() === App.get('movie.title').toLowerCase() &&
              movie.rlsdate.split('-')[0] === App.get('movie.year')) {
              payload.set("critic", movie);
              return;
            }
          });
        } else {

        }
      }
    });

    $.ajax({
      type: 'GET',
      url: "https://community-myapifilms-imdb.p.mashape.com/search?idIMDB=tt%@1".fmt(imdbId),
      headers: {
        "X-Mashape-Key": "M7sWO2PM18mshCs0lN6fKcg7d9FAp11NAgRjsnHVmnNDfwEgCy",
      },
      success: function(data) {
        payload.set("imdb", JSON.parse(data));
      }
    });

    $.ajax({
      url: "http://api.rottentomatoes.com/api/public/v1.0/movies/%@2.json?apikey=%@1".fmt(App.get('rottenTomatoesApiKey'), tomatoId),
      dataType: "jsonp",
      success: function(data) {
        payload.set("rotten", data);
      }
    });

    return payload;

  }

})