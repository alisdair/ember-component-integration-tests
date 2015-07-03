import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import Alert from 'component-integration-tests/models/alert';

moduleForComponent('table-flip', 'Integration | Helper | table flip', {
  integration: true
});

test('flips a table with the text', function(assert) {
  assert.expect(1);

  this.set('message', 'My coffee is cold!');

  this.render(hbs`
    {{table-flip message}}
  `);

  var text = this.$('').text().trim();
  assert.equal(text, '(╯°□°）╯︵ ┻━┻) My coffee is cold!');
});
