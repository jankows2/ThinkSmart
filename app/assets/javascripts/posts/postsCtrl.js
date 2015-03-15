/**
 * Created by sebastian1 on 06/03/15.
 */

angular.module('thinkSmart')
    .controller('PostsCtrl', [
        '$scope',
        'posts',
        'post',
        function($scope, posts, post){

    $scope.post = post;

    $scope.addComment = function(){
        if($scope.body === '') { return; }
        posts.addComment(post.id, {
            body: $scope.body,
            author: 'user'
        }).success(function(comment) {
            $scope.post.comments.push(comment);
        });
        $scope.body = '';
    };

    $scope.incrementUpvotes = function(comment){
        posts.upvoteComment(post, comment);
    };


}]);