var s, _base;

if (window.SimpleNote == null){
  window.SimpleNote = {
    Views: {}
  };
}

s = window.SimpleNote;

if ((_base = s.Views).Notes == null) {
  _base.Notes = {};
}

s.Views.Notes.IndexView = Backbone.View.extend({
  tagName: 'ul',
  id: 'notes',
  initialize: function(options) {
    this.options = options;
    return this.listenTo(this.collection, "reset", (function(_this) {
      return function() {
        return _this.render();
      };
    })(this));
  },
  render: function() {
    this.collection.each(function(_this)) {
      return function(note) {
        var view;
        view = new s.Views.Notes.IndexItemView({
          model: note
        });
        return _this.$el.append(view.render().el);
      };
    })(this));
    $('#main').html(this.el);
    newButtonView = new s.Views.Notes.NewButtonView();
    $('#main').prepend(newButtonView.render().el);
    return this;
  }
});
