describe('SongQueueView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title: 'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title: 'test song 2'
      }
    ]);
  });

  it('creates SongQueueEntryViews for each queued song & renders them', function() {
    sinon.spy(SongQueueEntryView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).to.have.been.called;
  });

  it('renders when add or remove event fires from the song queue collection', function() {
    sinon.spy(SongQueueView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title: 'test song 3'
    });
    view.collection.pop();
    expect(view.render).to.have.been.called;
  });

  it('removes songs from the queue when they are clicked', function() {
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    // console.log($('tr'));
    // $('tr').click();
    view.$el.find('tr').first().click();
    view.$el.find('tr').first().click();
    // console.log(JSON.stringify(view.$el.children().get(1)));
    expect(view.collection.length).to.equal(0);
  });

});

