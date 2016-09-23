angular.module('app').controller('ShoppingCartCtrl',['$scope','$http',function($scope,$http) {
 
    $scope.contents="Hello World";
    
    //calling customer service with id 2
    $http.get("/service/customer/2").then(function(response){
       console.log('logging just the response') ;
        console.log(response);
        console.log("end of response");
        $scope.contents=response.data;
        console.log($scope.contents);
        
    });
    //Data to post info, assume this is coming from a form element
    var data={
        firstName:"Peter",
        lastName:"griffin",
        address:'Malepatan',
        phone:"111111111",
        email:"the@the.com"
    };
    //post service to add info to the service
    $http.post("/service/customer",data) //here you can replace the data variable with a JSON object
    .success(function(data){
        console.log(data);
    })
    .error(function(data){
        console.log(data);
    });
}]);