// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  // initalize: function() {
  //   this.$el.on('ended', function() {
  //     this.model.ended();
  //   }.bind(this));
  // },
  tagName: 'tr',

  events: {
    'click': function() {
      // this.model.play();
      console.log('clicked');
      this.model.dequeue();
    }
  },

  render: function() {
    return this.$el.html(`
      <td>${this.model.get('artist')}</td>
      <td>${this.model.get('title')}</td>
      <td>${this.model.get('playcount')}</td>
    `);
  }
});
