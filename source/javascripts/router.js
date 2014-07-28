App.Router.map(function() {

  this.route('index', {path: '/'});

  this.route('movie', {path: '/movie'});

  this.route('search', {path: '/search/:search_term'});

});

App.Router.reopen({

  rootURL: "/",

  location: 'none',

})
