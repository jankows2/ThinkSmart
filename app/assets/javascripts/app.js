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
    .state('welcome-page',{
      url: '/welcome-page',
      templateUrl: 'Welcome-page/_welcome.html',
      controller: 'MainCtrl'
    })
    .state('dashboard',{
      url: '/dashboard',
      templateUrl: 'dashboard/_dashboard.html',
      controller: 'dashboardCtrl'
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


    // Routes for Partials Lectures page's
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

    // Routes for Partials Quiz page's

    .state('createQuiz', {
      url: '/createQuiz',
      templateUrl: 'partials/quiz/createQuiz.html',
      controller: 'AuthCtrl'
    })
    .state('takeQuiz', {
      url: '/takeQuiz',
      templateUrl: 'partials/quiz/takeQuiz.html',
      controller: 'AuthCtrl'
    });


    $urlRouterProvider.otherwise('/');
}]);


