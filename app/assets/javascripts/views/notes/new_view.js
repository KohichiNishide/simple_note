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
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $('#main').html(this.el);
    return this;
  }
});
