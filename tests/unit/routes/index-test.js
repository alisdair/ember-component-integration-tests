import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:index', 'Unit | Route | index',  {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('resets alerts array on controller', function(assert) {
  assert.expect(2);
  var route = this.subject();
  var controller = Ember.Object.create({
    alerts: ['One alert']
  });

  Ember.run(() => route.setupController(controller));

  let alerts = controller.get('alerts');
  assert.equal(Ember.typeOf(alerts), 'array', 'alerts is an array');
  assert.equal(alerts.length, 0, 'alerts array is empty');
});
