var s;

s = this.SimpleNote;

if (s.Models == null) {
  s.Models = {};
}

s.Models.Note = Backbone.Model.extend({
    url: '/notes',
    initialize: function() {
      return this.listenTo(this, 'change:raw_body', _.debounce((function(_this) {
        return function() {
          return _this.renderBody();
        };
      })(this), 300));
    },
    previewText: function(length) {
      var _ref;
      if (length == null) {
        length = 140;
      }
      return (_ref = this.get("raw_body")) != null ? _ref.substring(0, length) : void 0;
    },
    renderBody: function() {
      return $.ajax("/notes/rendering", {
        type: "POST",
        dataType: 'json',
        data: {
          raw_body: this.get('raw_body')
        }
      }).done((function(_this) {
        return function(data) {
          return _this.set('body', data.body);
        };
      })(this));
    }
});

s.Collections.NoteCollection = Backbone.Collections.extend({
  model: s.Models.Note,
  url: '/notes'
});
