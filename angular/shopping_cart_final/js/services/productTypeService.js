angular.module("shoppingCart").service("productTypeService",["$http", function($http){
    
    //calling the inventory_type data
    
    $http.get("/service/inventory_type").then(function(response){
       
        console.log("Loggin Response");
        
        var productTypes = response.data;
        
        console.log(productTypes);
        
    });
    
    
}]);