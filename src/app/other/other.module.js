(function() {
  'use strict';

  angular.module('boisestate.other', ['ui.router'])
    .config(function config( $stateProvider ) {
      $stateProvider.state( 'other', {
        url: '/other',
        views: {
          "main": {
            templateUrl: 'other/other.tpl.html'
          }
        },
        data:{ pageTitle: 'Other' }
      });
    })

  ;

})();