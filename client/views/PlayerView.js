// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.model.on('ended', function() {
      console.log(this.model.collection);
    }, this);
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});


// call play on a song 
// the play event from the song
// bubbles up through library (the collection that the song is in)
// to the app (an AppModel instance) which changes the currentSong to the song that sent the play trigger 
// app view is listening for any change in currentSong. app view calls playerView's set song, which
// changes player view's model to the new song and re-renders


// psuedocode in progress!!
// call ended on a song 
// the ended event from the song
// bubbles up through library (the collection that the song is in)



// to the app (an AppModel instance) which changes the currentSong to the song that sent the play trigger 
// app view is listening for any change in currentSong. app view calls playerView's set song, which
// changes player view's model to the new song and re-renders
