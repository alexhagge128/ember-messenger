import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),


  actions: {
    removeFromFavs(item) {
      this.get('favoriteQuestions').remove(item);
    }
  }
});
