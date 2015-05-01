(function() {
  'use strict';

  angular.module('boisestate.another', ['ui.router'])
    .config(function config( $stateProvider ) {
      $stateProvider.state( 'another', {
        url: '/other',
        views: {
          "main": {
            templateUrl: 'another/another.tpl.html'
          }
        },
        data:{ pageTitle: 'Another' }
      });
    })

  ;

})();