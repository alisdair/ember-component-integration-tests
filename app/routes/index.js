import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller/*, model*/) {
    this._super.apply(this, arguments);
    controller.set('alerts', []);
  }
});
