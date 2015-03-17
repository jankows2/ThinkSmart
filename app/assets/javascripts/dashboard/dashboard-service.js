angular.module('thinkSmart')
    .service('DataService', ['$http',
        function($http){
            var getQuizz = function() {
                return $http.get('/quizz/').success(function(res){
                });
            };

            var addQuizz = function(quizz) {
                return $http.post('/quizz/', quizz).success(function(data){
                });
            };

            var deleteQuizz = function(id) {
                return $http.delete('/quizz/'+ id).success(function(data){
                    console.log(data)
                });
            };

            return {
                getQuizz : getQuizz,
                addQuizz : addQuizz,
                deleteQuizz : deleteQuizz
            }

        }]);