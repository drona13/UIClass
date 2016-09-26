angular.module("shoppingCart").service("producTypeService",["$http", function($http){
    
   var object = this;
    this.id=null;
    
    
    
    
    $http.get("/service/inventory_type").then(function(response){
       console.log("Logging response for Inventory_type");
        object.productTypes=response.data;
        
        console.log(object.productTypes);
        
        
    });
    
    
 this.getProductTypeIds = function(){
     var url = "/service/inventory_type"+object.id;
    
    $http.get(url).then(function(response){
       
        console.log("Logging Response from prodtype service by id");
        
     
          object.getProductTypeIds = response.data;
        console.log(object.getProductTypeIds);
        
    });
    
     }
    
}]);