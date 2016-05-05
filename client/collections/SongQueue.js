// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  playFirst: function () {
    // console.log('called SongQueues playFirst');
    this.at(0).play();
  },

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function() {
      // console.log('ended propagated to SongQueue');
      this.shift();
      if (this.length >= 1) {
        this.playFirst();
      }
    }, this);
    this.on('dequeue', function(song) {
      // console.log(song);
      this.remove(song);
      // if (this.length === 1) {
      //   this.playFirst();
      // }
    }, this);
  }
});