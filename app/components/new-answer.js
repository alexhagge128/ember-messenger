import Ember from 'ember';
import moment from 'moment';


export default Ember.Component.extend({

  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        message: this.get('message'),
        question: this.get('question'),
        date: moment().format('YYYY-MM-DD h:mm:ss a')
      };
      this.sendAction('saveAnswer', params);
      console.log(params.date);

      this.set('author', "");
      this.set('message', "");
    }
  }
});
