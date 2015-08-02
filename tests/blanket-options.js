// jscs: disable
/* globals blanket, module */

var options = {
  modulePrefix: 'component-integration-tests',
  filter: /^component-integration-tests\//,
  antifilter: [
    'component-integration-tests/initializers/export-application-global',
    'component-integration-tests/instance-initializers/app-version',
    'component-integration-tests/controllers/array',
    'component-integration-tests/controllers/object',
    '/tests/',
    '/config/',
    '/templates/',
  ],
  loaderExclusions: [],
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
