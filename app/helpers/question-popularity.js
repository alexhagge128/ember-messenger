import Ember from 'ember';

export function questionPopularity(params) {
  //console.log(question);
  var question = params[0];
  console.log(question.get('answers').get('length'));



}

export default Ember.Helper.helper(questionPopularity);
