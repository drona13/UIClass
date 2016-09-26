angular.module("sampleView",["ngRoute"])
.config(function($locationProvider,$routeProvider){
  $routeProvider
  //route for the home page
  .when('/',{
      
      controller:"sampleViewCtrl",
      templateUrl:'/views/home.html'
      })
  .when('/home',{
     
      controller:"homeCtrl",
   templateUrl:'/views/home.html'   
  })
   .otherwise({
   templateUrl:'/views/error.html'   
});
    
    $locationProvider
    .html5Mode(false)
    .hashPrefix('!')
});