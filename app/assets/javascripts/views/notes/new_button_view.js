var s;

s = window.SimpleNote.Views;

s.Views.Notes.NewButtonView = Backbone.View.extend({
  className: 'new-button-block',
  template: JST['notes/new_button'],
  events: {
    'click a': 'navigateToNewNote'
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  navigateToNewNote: function() {
    return Backbone.history.navigate('notes/new', true);
  }
});
