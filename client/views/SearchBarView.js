var SearchBarView = Backbone.View.extend({

  events: {
    'mouseup': function() {
      console.log('search bard clicked');
      console.log(this.$el.children().first().val()); 
      this.collection.fetchAndFilter(this.$el.children().first().val());
    }
  },

  render: function() {
    return this.$el.html('<input type = "text" />');
  }

});
