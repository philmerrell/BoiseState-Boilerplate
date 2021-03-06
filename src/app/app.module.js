(function() {
  'use strict';

  angular
    .module('boisestate', [
      'templates-app',
      'templates-common',
      'boisestate.home',
      'boisestate.about',
      'boisestate.other',
      'boisestate.another',
      'ui.router'
    ])

    .config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
      $urlRouterProvider.otherwise( '/' );
    })

    .run( function run () {
    })

    .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
      $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if ( angular.isDefined( toState.data.pageTitle ) ) {
          $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
        }
      });
    })

  ;

})();


