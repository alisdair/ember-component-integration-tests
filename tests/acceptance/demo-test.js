import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'component-integration-tests/tests/helpers/start-app';

let application;

module('Acceptance | index', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('creating alert with demo form', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(find('.alert-banner').length, 0, 'no alerts by default');
  });

  fillIn('input[placeholder="Alert text"]', 'My alert text here');
  click('input[type=checkbox]:eq(0)');
  click('button:contains(Create alert)');

  andThen(() => {
    let alert = find('.alert-banner');
    assert.equal(alert.length, 1, 'alert created');
    assert.equal(alert.text().trim(), 'My alert text here', 'shows text');
  });
});
