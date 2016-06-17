import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') > 5) {
    
  }
  return ("Responses: " + question.get('answers').get('length'));
}

export default Ember.Helper.helper(questionPopularity);
