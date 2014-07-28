App.SearchController = Ember.ObjectController.extend({

  actions: {

    selectedMovie: function(movie) {

      App.set('movie', movie);
      this.transitionToRoute('movie');

    }

  }

});