/**
 * @ngdoc function
 * @name MainApp.controller:MainController
 * @description
 * # MainController
 * Controller of the MainApp
 */
angular.module('MainApp')
  .run(function($rootScope, $state, $stateParams, $log) {
    'use strict';

    $state.go('home');
    // You need to put $state on $rootScope to access it in controller
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateNotFound', 
      function(event, unfoundState, fromState, fromParams) {
        $log.log(unfoundState.to); // "unknown.state"
        $log.log(unfoundState.toParams); // {a:1, b:2}
        $log.log(unfoundState.options); // {inherit:false} + default options
        $state.go("error?code=404");
      });

    $rootScope.settings = {
      displayDensity: 'cozy',
      btnDensity: 'btn-cozy',
      navbarDensity: 'navbar-cozy',
      navbarNavDensity: 'navbar-nav-cozy',
      navbarBtnDensity: 'navbar-btn-cozy',
      navbarBrandDensity: 'navbar-brand-cozy',
      navbarToggleDensity: 'navbar-toggle-cozy',
      dropdownMenuDensity: 'dropdown-menu-cozy',
      dropdownHeaderDensity: 'dropdown-header-cozy',
      marginFixDensity: 'margin-fix-cozy',
      faIconDensity: ''
    };

    $log.log($rootScope);
    $log.log($state);
    $log.log($stateParams);
  })
  .controller('MainController', function ($scope, $state, $log) {
    'use strict';

    $scope.goToOnSpace = function (event, locationToGo) {
      if (event.keyCode === 32) {
        $log.log(locationToGo);
        $state.go(locationToGo);
      }
    };

    $scope.$watch('settings.displayDensity', function() {
      $scope.settings.btnDensity = 'btn-' + $scope.settings.displayDensity;
      $scope.settings.navbarDensity = 'navbar-' + $scope.settings.displayDensity;
      $scope.settings.navbarNavDensity = 'navbar-nav-' + $scope.settings.displayDensity;
      $scope.settings.navbarBtnDensity = 'navbar-btn-' + $scope.settings.displayDensity;
      $scope.settings.navbarBrandDensity = 'navbar-brand-' + $scope.settings.displayDensity;
      $scope.settings.navbarToggleDensity = 'navbar-toggle-' + $scope.settings.displayDensity;
      $scope.settings.dropdownMenuDensity = 'dropdown-menu-' + $scope.settings.displayDensity;
      $scope.settings.dropdownHeaderDensity = 'dropdown-header-' + $scope.settings.displayDensity;
      $scope.settings.marginFixDensity = 'margin-fix-' + $scope.settings.displayDensity;
      $scope.settings.faIconDensity = 'fa-icon-' + $scope.settings.displayDensity;
    });

    $log.log($scope);
    $log.log($state);
  });
