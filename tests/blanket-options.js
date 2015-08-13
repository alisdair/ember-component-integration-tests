// jscs: disable
/* globals blanket, module */

var options = {
  modulePrefix: 'component-integration-tests',
  filter: /^component-integration-tests\//,
  antifilter: [
    'component-integration-tests/components/app-version',
    'component-integration-tests/initializers/export-application-global',
    'component-integration-tests/initializers/app-version',
    '/tests/',
    '/config/',
    '/templates/',
  ],
  loaderExclusions: [
    'component-integration-tests/acceptance-tests',
  ],
  enableCoverage: true,
  cliOptions: {
    lcovOptions: {
      outputFile: 'lcov.dat',
      renamer: function(moduleName){
        var expression = /^component-integration-tests/;
        return moduleName.replace(expression, 'app') + '.js';
      }
    },
    reporters: ['lcov']
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
