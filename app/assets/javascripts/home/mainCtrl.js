/**
 * Created by sebastian1 on 06/03/15.
 */

angular.module('thinkSmart')
.controller('MainCtrl', ['$scope','posts',function($scope, posts){
    $scope.posts = posts.posts;

    $scope.addPost = function(){
        if(!$scope.title || $scope.title === '') { return; }
        posts.create({
            title: $scope.title,
            link: $scope.link
        });
        $scope.title = '';
        $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
        posts.upvote(post);
    };

}]);

