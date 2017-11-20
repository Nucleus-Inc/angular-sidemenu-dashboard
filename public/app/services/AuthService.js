(function() {
  angular.module('dashboard').service('Auth', ['$http','$q','$location', function($http, $q, $location) {

    this.login = function(email, password) {
      return $http.post('/admin/auth/local/login', {
        'email': email,
        'password': password
      }).then(function(result) {
        return result;
      });
    };

    this.isAuthenticated = function() {
      return $http.get('/admin/auth/local/login').then(function(result) {
        if (result.status == 200) {
          return "Authenticated";
        } else {
          return $q.reject("Not Authenticated");
        }
      });
    };

    this.logout = function() {
      return $http.post('/admin/auth/local/logout').then(function(result) {
        return result;
      });
    };

  }]);
}());
