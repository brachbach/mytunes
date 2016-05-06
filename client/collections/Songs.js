// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/songs/',
  
  model: SongModel,

  parse: function(response) {
    return response.results;
  },

  initialize: function() {
    this.fetch(
      {
        data: 'where={"title": "Back and Forth"}',
        success: function() {
          this.trigger('fetched');
        }.bind(this)
      }
    );
  },

  fetchAndFilter: function() {
    console.log('fetchAndFilter');
    this.fetch(
      {
        data: 'where={"title": "4 Page Letter"}',
        success: function() {
          this.trigger('fetched');
        }.bind(this)
      }
    );
  }
});