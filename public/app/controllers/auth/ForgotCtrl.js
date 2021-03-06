(function() {
  angular.module('dashboard').controller('ForgotCtrl', ['$scope','Account','$compile', function($scope,Account,$compile) {

    var vm = this;

    vm.send = false;

    vm.close = function() {
      vm.send = false;
    };

    vm.submit = function() {
      if (!$scope.ForgotForm.$invalid) {
        Account.setRecoveryToken({
          'recoveryKey': vm.user.email
        }).then(function(res){
          if(res.status == 200){
            vm.send = true;
            $scope.ForgotForm.$setPristine();
            vm.user.email = '';
          }
        }).catch(function(err){
          console.log(err);
        });
      }
    };

  }]);
}());
