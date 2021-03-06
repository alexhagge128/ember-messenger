import Ember from 'ember';
import moment from 'ember';

export default Ember.Route.extend({
  favoriteQuestions: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  updateQuestionForm: false,

  actions: {
    save(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },

    addToFavs(item) {
      this.get('favoriteQuestions').add(item);
    }

  }
});
