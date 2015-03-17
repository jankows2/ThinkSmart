/**
 * Created by sebastian1 on 06/03/15.
 */
angular.module("password.directives", []).directive("ngEquals", function() {
    var directive = { };

    directive.restrict = 'A';
    directive.require = 'ngModel';
    directive.scope = {
        original: '=ngEquals'

    };
    directive.link = function(scope, elm, attrs, ngModel) {
        ngModel.$parsers.unshift(function(value) {
            ngModel.$setValidity('equals', scope.original === value);
            return value;
        });
    };

    return directive;
});


angular.module('thinkSmart')
    .controller('AuthCtrl', [
        '$scope',
        '$state',
        'Auth',
        function($scope, $state, Auth){

            $scope.login = function() {
                Auth.login($scope.user).then(function(){
                    $state.go('dashboard');
                });
            };

            $scope.register = function() {
                Auth.register($scope.user).then(function(){
                    $state.go('home');
                });
            };

            $scope.passwordPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;


        }]);

