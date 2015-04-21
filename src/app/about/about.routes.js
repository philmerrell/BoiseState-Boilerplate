(function() {
  'use strict';

  angular
    .module('boisestate.about')
    .config(AboutConfig)
  ;

  function AboutConfig($stateProvider) {

    $stateProvider
      .state( 'about', {
        url: '/about',
        views: {
          "main": {
            controller: 'AboutCtrl as vm',
            templateUrl: 'about/about.tpl.html'
          }
        },
        data:{ pageTitle: 'About' }
      })
    ;

  }

})();