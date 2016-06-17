(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
      })
      .when('/other', {
        templateUrl: 'app/other/other.html',
        controller: 'OtherController',
        controllerAs: 'vm'
      })
      .when('/translation', {
        templateUrl: 'app/translation/translation.html',
        controller: 'TranslationController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
