var s, _base;

if (window.SimpleNote == null) {
  window.SimpleNote = {
    View: {}
  };
}

s = window.SimpleNote;

if ((_base = s.Views).Notes == null) {
  _base.Notes = {};
}

s.Views.Notes.NewView = Backbone.View.extend({
  className: 'new-note',
  template: JST['notes/new'],
  events: {
    'click .submit-note-form' : 'submit'
  },
  binding: {
    '#input-note-title' : 'title',
    '#input-note-raw_body' : 'raw_body'
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $('#main').html(this.el);
    this.stickit();
    return this;
  },
  submit: function(e) {
    e.preventDefault();
    return this.trigger('clickSubmit');
  }
});
