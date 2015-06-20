import Ember from 'ember';
import Alert from '../models/alert';

export default Ember.Controller.extend({
  alerts: [],
  alertText: 'Alert banner text',
  createDisabled: Ember.computed.empty('alertText'),

  dismissible: true,
  closeAction: Ember.computed('dismissible', function() {
    if (this.get('dismissible')) {
      return 'removeAlert';
    }
  }),

  fancy: false,

  actions: {
    createAlert() {
      let alert = Alert.create({
        text: this.get('alertText'),
        fancy: this.get('fancy'),
        closeAction: this.get('closeAction')
      });
      this.get('alerts').pushObject(alert);
    },

    removeAlert(alert) {
      this.get('alerts').removeObject(alert);
    }
  }
});
