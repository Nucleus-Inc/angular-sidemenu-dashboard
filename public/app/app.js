'use strict';

/**
 * @ngdoc overview
 * @name dashboard
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */

angular
  .module('dashboard',[
      'ngRoute',
      'chart.js',
      'angularModalService',
      'angular-table',
      'cgNotify',
      'alexjoffroy.angular-loaders',
      'ngMessages',
      'ngAnimate',
      'ngSanitize',
      'ui.utils.masks',
      'zxcvbn',
      'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {

    // Remove '!' from path
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/',{
        templateUrl: 'app/views/home/home.html',
        controller: 'HomeCtrl as homeCtrl'/*,
        resolve: {
          access: function(Auth) {
            return Auth.isAuthenticated();
          }
        }*/
      })
      .when('/tables',{
        templateUrl: 'app/views/uiElements/tables.html',
        controller: 'TablesCtrl as tablesCtrl'
      })
      .when('/forms',{
        templateUrl: 'app/views/uiElements/forms.html',
        controller: 'FormsCtrl as formsCtrl'
      })
      .when('/buttons',{
        templateUrl: 'app/views/uiElements/buttons.html',
        controller: 'ButtonsCtrl as buttonsCtrl'
      })
      .when('/notifications',{
        templateUrl: 'app/views/uiElements/notifications.html',
        controller: 'NotificationsCtrl as notificationsCtrl'
      })
      .when('/blank',{
        templateUrl: 'app/views/pages/blank.html',
        controller: 'BlankCtrl as blankCtrl'
      })
      .when('/login',{
        templateUrl: 'app/views/auth/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginCtrl'
      })
      .when('/register',{
        templateUrl: 'app/views/auth/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'registerCtrl'
      })
      .when('/forgot',{
        templateUrl: 'app/views/auth/forgot.html',
        controller: 'ForgotCtrl',
        controllerAs: 'forgotCtrl'
      })
      .when('/reset/:token',{
        templateUrl: 'app/views/auth/reset.html',
        controller: 'ResetCtrl',
        controllerAs: 'resetCtrl'
      })
      .when('/activation/:token',{
        templateUrl: 'app/views/auth/activation.html',
        controller: 'ActivationCtrl',
        controllerAs: 'activationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  })

  .run(function($rootScope, $location) {

    /* Route events */
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      console.log("Route Start");
    });

    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
      console.log("Route Change Error: " + rejection);
      $location.path("/login");
    });

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      if (typeof previous != 'undefined') {
        console.log("Previous Url: " + previous.originalPath);
      }
      console.log("Current Url: " + current.originalPath);
    });

  });
