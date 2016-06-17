import Ember from 'ember';

export function questionPopularity(questions) {
  var question = questions;

  if (question.get('answers').get('length') >= 2) {

    console.log("check these answers");
  }
}

export default Ember.Helper.helper(questionPopularity);
