var s, _base;

if (ndow.SimpleNote == null) {
  ndow.SimpleNote = {
    Views: {}
  };
}

s = this.SimpleNote;

if ((_base = s.Views).Notes == null) {
  _base.Notes = {};
}

s.Views.Notes.PreviewView = Backbone.View.extend({
  template: JST['notes/preview'],
  bindings: {
    '#note-title': 'title',
    '#note-body': {
      observe: 'raw_body',
      update: _.debounce((function(_this) {
        return function($el, val, model, options) {
          return model.renderBody().done(function(data) {
            $el.html(data.body);
            return $("code").each(function(i, e) {
              return hljs.highlightBlock(e);
            });
          });
        };
      })(this), 400)
    }
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.model.trigger('change:raw_body');
    return this.stickit();
  }
});
