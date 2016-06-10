import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        query: this.get('query'),
        note: this.get('note')
      };
      this.sendAction('save', params);
    }
  }
});
