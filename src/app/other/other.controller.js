(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('OtherController', OtherController);

  /** @ngInject */
  function OtherController(webDevTec) {
    var vm = this;
    vm.cards = webDevTec.getTec();

  }
})();
