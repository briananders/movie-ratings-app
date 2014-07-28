App.MovieController = Ember.ObjectController.extend({

  averageNonCritic: function() {
    var a = Number(this.get("imdb.rating") || 0) * 10,
        b = Number(this.get("rotten.ratings.audience_score") || 0),
        c = Number(this.get("critic.avguserscore") || 0) * 10;

    return (a + b + c) / 3;
  }.property("imdb.rating", "rotten.ratings.audience_score", "critic.avguserscore"),

  averageCritic: function() {
    var a = this.get("imdb.metascore") || 0,
        b = Number(this.get("rotten.ratings.critics_score") || 0),
        c = Number(this.get("critic.score") || 0);

    if(a !== 0) {
      a = Number((a.split('/'))[0]);
    }

    return (a + b + c) / 3;
  }.property("imdb.metascore", "rotten.ratings.critics_score", "critic.score"),

  actions: {

    selectedMovie: function(movie) {

      App.set('movie', movie);
      this.transitionToRoute('movie');

    }

  }

});