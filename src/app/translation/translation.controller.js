(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('TranslationController', TranslationController);

  /** @ngInject */
  function TranslationController(TranslationService) {
    var vm = this;

    function loadTags() {
      TranslationService.loadLocalesTags().then(function (tags) {
        vm.tags = tags;
      });
    }
    loadTags();
  }
})();
