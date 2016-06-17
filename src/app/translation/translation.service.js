(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .service('TranslationService', TranslationService);

  function TranslationService($resource, $q) {
    var service = {
      loadLocalesTags: loadLocalesTags
    };

    var LocalesResource =  $resource("assets/locales/locale-:location.json");

    return service;

    function loadLocalesTags(){
      return $q(function(resolve, reject) {
        LocalesResource.get({
          location: "es_ES"
        }).$promise
          .then(function (json) {
            resolve(_.keys(json));
          })
          .catch(reject);
      });
    }
  }
})();
