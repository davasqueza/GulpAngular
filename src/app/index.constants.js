/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('backend_url',"http://url.to.backend")
    .constant('LOCALES', {
      'locales': {
        'es_ES': 'Español',
        'en_US': 'English',
        'de_DE': 'Deutsch'
      },
      'preferredLocale': 'en_ES'
    });

})();
