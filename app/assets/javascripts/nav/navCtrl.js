/**
 * Created by sebastian1 on 06/03/15.
 */


angular.module('thinkSmart')
    .controller('NavCtrl', [
        '$scope',
        'Auth',
        '$location',
        function($scope, Auth,$location){
            $scope.signedIn = Auth.isAuthenticated;
            $scope.logout = Auth.logout;
            Auth.currentUser().then(function (user){
                $scope.user = user;
                $scope.$on('devise:new-registration', function (e, user){
                    $scope.user = user;
                });

                $scope.$on('devise:login', function (e, user){
                    $scope.user = user;
                });

                $scope.$on('devise:logout', function (e, user){
                    $scope.user = {};
                    $location.path('/home')

                });




            });



        }]);
