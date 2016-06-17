import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  return ("Responses: " + question.get('answers').get('length'));
}

export default Ember.Helper.helper(questionPopularity);
