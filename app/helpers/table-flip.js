import Ember from 'ember';

const flip = '(╯°□°）╯︵ ┻━┻) ';

export default Ember.Helper.helper(function(params) {
  return flip + params;
});
