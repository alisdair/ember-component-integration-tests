import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('table-flip', 'Integration | Helper | table flip', {
  integration: true
});

test('flips a table with the text', function(assert) {
  assert.expect(1);

  this.set('message', 'My coffee is cold!');

  this.render(hbs`
    {{table-flip message}}
  `);

  let text = this.$('').text().trim();
  assert.equal(text, '(╯°□°）╯︵ ┻━┻) My coffee is cold!');
});
