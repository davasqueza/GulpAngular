(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $route) {
    $route.reload();
    $log.debug('runBlock end');
  }

})();
