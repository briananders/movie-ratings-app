App.ApplicationController = Ember.ObjectController.extend({

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

  actions: {

    search: function() {

      this.transitionToRoute('search', App.get('search'));

    },

  },

});