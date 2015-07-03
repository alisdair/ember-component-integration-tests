import Ember from 'ember';

const flip = '(╯°□°）╯︵ ┻━┻) ';

export function tableFlip(params/*, hash*/) {
  return flip + params;
}

export default Ember.HTMLBars.makeBoundHelper(tableFlip);
