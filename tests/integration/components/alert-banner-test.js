import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import Alert from 'component-integration-tests/models/alert';

moduleForComponent('alert-banner', 'Integration | Component | alert banner', {
  integration: true
});

test('renders text in element with class alert-banner', function(assert) {
  assert.expect(2);

  let alert = Alert.create({ text: 'Hello, world!' });
  this.set('alert', alert);

  this.render(hbs`
    {{alert-banner alert=alert}}
  `);

  let $alert = this.$('.alert-banner');
  assert.equal($alert.length, 1, 'alert banner is rendered');

  assert.equal($alert.text().trim(), 'Hello, world!', 'alert includes text');
});

test('close button and closeAction', function(assert) {
  assert.expect(3);

  let alert = Alert.create({ text: 'Hello, world!' });
  this.set('alert', alert);

  this.set('closeAction', null);

  this.render(hbs`
    {{alert-banner alert=alert closeAction=closeAction}}
  `);

  let $button = this.$('.alert-banner button');
  assert.equal($button.length, 0, 'no close button if no closeAction');

  this.set('closeAction', 'removeAlert');

  $button = this.$('.alert-banner button');
  assert.equal($button.length, 1, 'has close button if closeAction is set');

  this.on('removeAlert', a => {
    assert.deepEqual(a, alert, 'clicking close fires action passing alert');
  });
  $button.click();
});

test('with optional block for rendering text', function(assert) {
  assert.expect(3);

  let alert = Alert.create({ text: 'The server is on fire!' });
  this.set('alert', alert);

  this.render(hbs`
    {{#alert-banner alert=alert as |text|}}
      <h3 class="text-danger">Something Went Wrong</h3>

      <p>{{text}}</p>
    {{/alert-banner}}
  `);

  let $alert = this.$('.alert-banner');
  assert.equal($alert.length, 1, 'renders alert');

  let $h3 = $alert.find('h3.text-danger');
  assert.equal($h3.text().trim(), 'Something Went Wrong', 'renders heading');

  let $p = $alert.find('p');
  assert.equal($p.text().trim(), 'The server is on fire!', 'renders text');
});

test('with optional block which renders links', function(assert) {
  assert.expect(3);

  let alert = Alert.create({ text: 'The server is on fire!' });
  this.set('alert', alert);

  this.render(hbs`
    {{#alert-banner alert=alert as |text|}}
      <p>{{text}}</p>

      <div>{{link-to 'Go home' 'index'}}</div>
    {{/alert-banner}}
  `);

  let $alert = this.$('.alert-banner');
  assert.equal($alert.length, 1, 'renders alert');

  let $p = $alert.find('p');
  assert.equal($p.text().trim(), 'The server is on fire!', 'renders text');

  let $a = $alert.find('div a');
  assert.equal($a.text().trim(), 'Go home', 'renders "Go home" link');
});
