import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        query: this.get('query'),
        note: this.get('note'),
        date: moment().format('YYYY-MM-DD h:mm:ss a')
      };
      this.sendAction('save', params);
      this.set('author', "");
      this.set('query', "");
      this.set('note', "");

      console.log(params.date);
    }
  }
});
