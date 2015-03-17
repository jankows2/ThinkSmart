
angular.module('thinkSmart')
    .controller('dashboardCtrl', ['$scope','DataService',function($scope,DataService){


        var getResults = function(){
            $scope.dataGraph = [];
            DataService.getQuizz().then(function(data) {
                $scope.quizzes = data.data
                $scope.quizzes.forEach(function(quizz){
                    $scope.dataGraph.push(parseInt(quizz.quizz))
                });
                $scope.dataReady = true;
            });
            console.log($scope.dataGraph)
        };


        $scope.submitResult = function(){
            var result = {
                quizz: {
                    quizz : $scope.result
                }
            };
            DataService.addQuizz(result).then(function(data) {
                console.log(data);
                $scope.quizzes.push(data.data);
            });
        };

        $scope.deleteResult = function(id, index){
            DataService.deleteQuizz(id).then(function(){
                $scope.quizzes.splice(index, 1);
            });
        };

        getResults()


    }]);

