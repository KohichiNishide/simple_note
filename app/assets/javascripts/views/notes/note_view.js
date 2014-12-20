var s, _base;

s = this.SimpleNote;

if ((_base = s.Views).Notes == null) {
  _base.Notes = {};
}

s.Views.Notes.NoteView = Backbone.View.extend({
  className: 'new-note',
  template: JST['notes/note'],
  events: {
    'click .submit-note-form' : 'submit',
    'click .back' : 'navigateToNoteIndex'
  },
  binding: {
    '#input-note-title' : 'title',
    '#input-note-raw_body' : 'raw_body'
  },
  render: function() {
    var preview;
    this.listenTo(this.model, 'sync', _.bind(this._onModelSynced, this));
    this.listenTo(this.model, 'error', _.bind(this._onModelErrored, this));
    this.$el.html(this.template(this.model.toJSON()));
    preview = new s.Views.Notes.PreviewView({
      model: this.model,
      el: this.$('.preview-col')
    });
    preview.render();
    this.stickit();
    return this;
  },
  submit: function(e) {
    e.preventDefault();
    return this.trigger('clickSubmit');
  },
  navigateToNoteIndex: function(e) {
    e.preventDefault();
    return Backbone.history.navigate('notes', true);
  },
  _onModelSynced: function() {
    return this.$('.submit-note-form').notify("Success!", {
      className: 'success',
      position: "right"
    });
  },
  _onModelErrored: function() {
    return this.$('.submit-note-form').notify("Error!", {
      className: 'error',
      position: "right"
    });
  }
});
