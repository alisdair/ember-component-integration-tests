import Ember from 'ember';
import Alert from '../models/alert';

export default Ember.Controller.extend({
  alerts: [],
  alertText: 'Alert banner text',
  createDisabled: Ember.computed.empty('alertText'),

  actions: {
    createAlert() {
      let alert = Alert.create({ text: this.get('alertText') });
      this.get('alerts').pushObject(alert);
    }
  }
});
