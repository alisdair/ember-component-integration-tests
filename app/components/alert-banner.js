import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['alert-banner'],

  alert: null,
  text: Ember.computed.alias('alert.text'),
});
