import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') > 5) {
    console.log("this topic is on fire");
    //actions
  }
  return ("Responses: " + question.get('answers').get('length'));
}

export default Ember.Helper.helper(questionPopularity);
