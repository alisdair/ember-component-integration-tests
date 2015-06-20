import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import Alert from 'component-integration-tests/models/alert';

moduleForComponent('alert-banner', 'Integration | Component | alert banner', {
  integration: true
});

test('renders text in element with class alert-banner', function(assert) {
  assert.expect(2);

  var alert = Alert.create({ text: 'Hello, world!' });
  this.set('alert', alert);

  this.render(hbs`
    {{alert-banner alert=alert}}
  `);

  var $alert = this.$('.alert-banner');
  assert.equal($alert.length, 1, 'alert banner is rendered');

  assert.equal($alert.text().trim(), 'Hello, world!', 'alert includes text');
});

test('close button and closeAction', function(assert) {
  assert.expect(3);

  var alert = Alert.create({ text: 'Hello, world!' });
  this.set('alert', alert);

  this.set('closeAction', null);

  this.render(hbs`
    {{alert-banner alert=alert closeAction=closeAction}}
  `);

  var $button = this.$('.alert-banner button');
  assert.equal($button.length, 0, 'no close button if no closeAction');

  this.set('closeAction', 'removeAlert');

  $button = this.$('.alert-banner button');
  assert.equal($button.length, 1, 'has close button if closeAction is set');

  this.on('removeAlert', a => {
    assert.deepEqual(a, alert, 'clicking close fires action passing alert');
  });
  $button.click();
});
