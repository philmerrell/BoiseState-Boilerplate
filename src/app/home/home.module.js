(function() {
  'use strict';

  angular
    .module( 'boisestate.home', [
    'ui.router'
  ])
    .config(function config( $stateProvider ) {
      $stateProvider.state( 'home', {
        url: '/',
        views: {
          "main": {
            controller: 'HomeCtrl as vm',
            templateUrl: 'home/home.tpl.html'
          }
        },
        data:{ pageTitle: 'Home' }
      });
    })

  ;

})();

