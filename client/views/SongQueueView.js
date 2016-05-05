// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add remove', this.render, this);
  },

  //for each song in song queue
  //  create a songqueueEntryView
  //  add it to the songqueueview html string
  //return the html
  render: function() {
    this.$el.append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
