import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:index', 'Unit | Controller | index',  {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('alerts is an array', function(assert) {
  assert.expect(1);
  var controller = this.subject();
  assert.equal(Ember.typeOf(controller.get('alerts')), 'array');
});

test('has default alert text', function(assert) {
  assert.expect(1);
  var controller = this.subject();
  assert.equal(controller.get('alertText'), 'Alert banner text');
});

test('creating alerts is disabled when alert text is empty', function(assert) {
  assert.expect(4);
  var controller = this.subject();

  assert.equal(controller.get('createDisabled'), false,
              'create is enabled by default');

  Ember.run(() => controller.set('alertText', null));

  assert.equal(controller.get('createDisabled'), true,
              'create is disabled when alertText is null');

  Ember.run(() => controller.set('alertText', ''));

  assert.equal(controller.get('createDisabled'), true,
              'create is disabled when alertText is empty string');

  Ember.run(() => controller.set('alertText', 'x'));

  assert.equal(controller.get('createDisabled'), false,
              'create is enabled when alertText is one character');
});

test('createAlert action creates an alert with the text', function(assert) {
  assert.expect(2);
  var controller = this.subject();

  Ember.run(() => {
    controller.set('alerts', []);
    controller.set('alertText', 'Test text');
    controller.send('createAlert');
  });

  let alerts = controller.get('alerts');
  assert.equal(alerts.length, 1, 'controller has one alert');
  assert.equal(alerts[0].get('text'), 'Test text', 'alert has specified text');
});

test('createAlert can create multiple alerts', function(assert) {
  assert.expect(3);
  var controller = this.subject();

  Ember.run(() => {
    controller.set('alerts', []);
    controller.set('alertText', 'First alert');
    controller.send('createAlert');
    controller.set('alertText', 'Another alert');
    controller.send('createAlert');
  });

  let alerts = controller.get('alerts');
  assert.equal(alerts.length, 2, 'controller has two alerts');

  assert.equal(alerts[0].get('text'), 'First alert',
               'first alert has text "First alert"');

  assert.equal(alerts[1].get('text'), 'Another alert',
               'first alert has text "Another alert"');
});
