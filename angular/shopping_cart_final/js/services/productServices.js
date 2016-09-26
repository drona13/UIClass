angular.module('shoppingCart').service('productService',["$http",function($http){
   
    
    
    
    
    
    this.id=null;
    var opt = this;
    
    
    this.getMainList = function(){
        
     var url = "/service/inventory/"+opt.id;
        
        $http.get(url).then(function(response){
            
            console.log("Logging from prodservc inventory by invtype_id")
            
                opt.inventoryMain = response.data;
            
            console.log(opt.inventoryMain);
                
        });
    }
    
}]);