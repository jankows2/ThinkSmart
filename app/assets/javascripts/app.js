angular.module('thinkSmart', [
    'ui.router',
    'templates',
    'Devise',
    'password.directives'
])
.config(['$stateProvider','$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('/',{
      url: '/',
      templateUrl: 'Welcome-page/_welcome.html',
      controller: 'MainCtrl'
    })
    .state('dashboard',{
      url: '/dashboard',
      templateUrl: 'dashboard/_dashboard.html',
      controller: 'MainCtrl'
    })
    .state('home', {
      resolve: {
          postPromise: ['posts', function(posts){
              return posts.getAll();
          }]
      },
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
      resolve: {
          post: ['$stateParams', 'posts', function($stateParams, posts) {
              return posts.get($stateParams.id);
          }]
      },
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
	  controller: 'PostsCtrl'
	})

    .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
              $state.go('dashboard');
          })
        }]
    })

    .state('register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
              $state.go('home');
          })
        }]
    })

    // Routes for Partials exams page's
    .state('examView', {
      url: '/examView',
      templateUrl: 'partials/exam/examView.html',
      controller: 'AuthCtrl'
    })
    .state('exam1', {
      url: '/exam1',
      templateUrl: 'partials/exam/exam1.html',
      controller: 'AuthCtrl'
    })
    .state('exam2', {
      url: '/exam2',
      templateUrl: 'partials/exam/exam2.html',
      controller: 'AuthCtrl'
    })


    // Routes for Partials Lectures page's
    .state('overview', {
        url: '/overview',
        templateUrl: 'partials/lectures/overview.html',
        controller: 'AuthCtrl'
    })
    .state('beginning', {
      url: '/beginning',
      templateUrl: 'partials/lectures/beginning.html',
      controller: 'AuthCtrl'
    })
    .state('creativity', {
          url: '/creativity',
          templateUrl: 'partials/lectures/creativity.html',
          controller: 'AuthCtrl'
      })
    .state('problemSolving', {
      url: '/problemSolving',
      templateUrl: 'partials/lectures/problemSolving.html',
      controller: 'AuthCtrl'
    })

    //Routes for Partials Problems
    .state('problem1', {
      url: '/problem1',
      templateUrl: 'partials/problems/problem1.html',
      controller: 'AuthCtrl'
    })
    .state('problem2', {
      url: '/problem2',
      templateUrl: 'partials/problems/problem2.html',
      controller: 'AuthCtrl'
    })
    .state('problem3', {
      url: '/problem3',
      templateUrl: 'partials/problems/problem3.html',
      controller: 'AuthCtrl'
    })

    // Routes for Partials Lectures2 page's
    .state('overviewTwo', {
      url: '/overviewTwo',
      templateUrl: 'partials/lectures2/overviewTwo.html',
      controller: 'AuthCtrl'
    })
    .state('criticalThinking', {
      url: '/criticalThinking',
      templateUrl: 'partials/lectures2/criticalThinking.html',
      controller: 'AuthCtrl'
    })
    .state('problemSolving2', {
      url: '/problemSolving2',
      templateUrl: 'partials/lectures2/problemSolving2.html',
      controller: 'AuthCtrl'
    })


    // Routes for Partials Quiz page's
    .state('quizView', {
        url: '/quizView',
        templateUrl: 'partials/quiz/quizView.html',
        controller: 'AuthCtrl'
    })
    .state('createQuiz', {
      url: '/createQuiz',
      templateUrl: 'partials/quiz/createQuiz.html',
      controller: 'AuthCtrl'
    })
    .state('takeQuiz', {
      url: '/takeQuiz',
      templateUrl: 'partials/quiz/takeQuiz.html',
      controller: 'AuthCtrl'
    })


    // Routes for Forum posts
    .state('post1', {
        url: '/post1',
        templateUrl: 'partials/quiz/createQuiz.html',
        controller: 'AuthCtrl'
    });

    $urlRouterProvider.otherwise('/');
}]);


