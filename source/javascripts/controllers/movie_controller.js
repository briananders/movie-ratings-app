App.MovieController = Ember.ObjectController.extend({

  average: function() {
    var a = this.get("imdbCritic"),
        b = this.get("rottenCritic"),
        c = this.get("metaCritic"),
        d = this.get("imdbUser"),
        e = this.get("rottenUser"),
        f = this.get("metaUser");

    var arr = [a, b, c, d, e, f],
        sum = arr.reduce(function(previousValue, currentValue, index, array){
                return previousValue + currentValue;
              });
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === 0) {
        a = arr.splice(i);
        arr = arr.concat(a.splice(1));
        i--;
      }
    }

    if(arr.length > 0) {
      return Math.round(sum / arr.length);
    } else {
      return 0;
    }
  }.property("imdb.rating", "rotten.ratings.audience_score", "critic.avguserscore", "imdb.metascore", "rotten.ratings.critics_score", "critic.score"),

  averageNonCritic: function() {
    var d = this.get("imdbUser"),
        e = this.get("rottenUser"),
        f = this.get("metaUser");

    var arr = [d, e, f],
        sum = arr.reduce(function(previousValue, currentValue, index, array){
                return previousValue + currentValue;
              });
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === 0) {
        a = arr.splice(i);
        arr = arr.concat(a.splice(1));
        i--;
      }
    }

    if(arr.length > 0) {
      return Math.round(sum / arr.length);
    } else {
      return 0;
    }
  }.property("imdb.rating", "rotten.ratings.audience_score", "critic.avguserscore"),

  averageCritic: function() {
    var a = this.get("imdbCritic"),
        b = this.get("rottenCritic"),
        c = this.get("metaCritic");

    var arr = [a, b, c],
        sum = arr.reduce(function(previousValue, currentValue, index, array){
                return previousValue + currentValue;
              });
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === 0) {
        a = arr.splice(i);
        arr = arr.concat(a.splice(1));
        i--;
      }
    }

    if(arr.length > 0) {
      return Math.round(sum / arr.length);
    } else {
      return 0;
    }
  }.property("imdb.metascore", "rotten.ratings.critics_score", "critic.score"),

  imdbCritic: function() {
    var rating = this.get("imdb.metascore") || 0;
    if(typeof rating === "string" && rating.indexOf('/') >= 0) {
      rating = rating.split('/')[0];
    }
    return Number(rating);
  }.property("imdb.metascore"),

  rottenCritic: function() {
    var rating = this.get("rotten.ratings.critics_score") || 0;
    return Number(rating);
  }.property("rotten.ratings.critics_score"),

  metaCritic: function() {
    var rating = this.get("critic.score") || 0;
    return Number(rating);
  }.property("critic.score"),

  imdbUser: function() {
    var rating = this.get("imdb.rating") || 0;
    if(typeof rating === "string") {
      rating = Number(rating) * 10;
    }
    return Number(rating);
  }.property("imdb.rating"),

  rottenUser: function() {
    var rating = this.get("rotten.ratings.audience_score") || 0;
    return Number(rating);
  }.property("rotten.ratings.audience_score"),

  metaUser: function() {
    var rating = this.get("critic.avguserscore") || 0;
    if(typeof rating === "string") {
      rating = Number(rating) * 10;
    }
    return Number(rating);
  }.property("critic.avguserscore"),



  averageStyles: function() {
    var num = this.get('average');
    var col = this.getColor(num);
    return "width:" + num + "%; background-color:" + col + ";";
  }.property('average'),

  averageNonCriticStyles: function() {
    var num = this.get('averageNonCritic');
    var col = this.getColor(num);
    return "width:" + num + "%; background-color:" + col + ";";
  }.property('averageNonCritic'),

  averageCriticStyles: function() {
    var num = this.get('averageCritic');
    var col = this.getColor(num);
    return "width:" + num + "%; background-color:" + col + ";";
  }.property('averageCritic'),

  imdbCriticStyles: function() {
    var num = this.get('imdbCritic');
    var col = this.getColor(num);
    return "width:" + num + "%; background-color:" + col + ";";
  }.property('imdbCritic'),

  rottenCriticStyles: function() {
    var num = this.get('rottenCritic');
    var col = this.getColor(num);
    return "width:" + num + "%; background-color:" + col + ";";
  }.property('rottenCritic'),

  metaCriticStyles: function() {
    var num = this.get('metaCritic');
    var col = this.getColor(num);
    return "width:" + num + "%; background-color:" + col + ";";
  }.property('metaCritic'),

  imdbUserStyles: function() {
    var num = this.get('imdbUser');
    var col = this.getColor(num);
    return "width:" + num + "%; background-color:" + col + ";";
  }.property('imdbUser'),

  rottenUserStyles: function() {
    var num = this.get('rottenUser');
    var col = this.getColor(num);
    return "width:" + num + "%; background-color:" + col + ";";
  }.property('rottenUser'),

  metaUserStyles: function() {
    var num = this.get('metaUser');
    var col = this.getColor(num);
    return "width:" + num + "%; background-color:" + col + ";";
  }.property('metaUser'),

  getColor: function(num) {
    if(num >= 80) return "#6FFF00"; //green
    if(num >= 60) return "#FFFF00"; //yellow
    if(num >= 40) return "#FFA700"; //orange
    if(num >= 20) return "#FE0001"; //red
    return "#7F0000"; //dark red
  },

  actions: {

    selectedMovie: function(movie) {

      App.set('movie', movie);
      this.transitionToRoute('movie');

    }

  }

});