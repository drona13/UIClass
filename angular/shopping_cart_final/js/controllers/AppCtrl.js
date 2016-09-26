angular.module("shoppingCart").controller("AppCtrl", ["$scope", "producTypeService", "productService",  function($scope, productTypeService, productService){
    
      $scope.title = "Hello and Welcome";
    
    $scope.inventoryTitle="";
    $scope.inventoryType="";
    console.log("From controller");
    console.log(productTypeService.productTypes);
   
    
    
    $scope.$watch(function(){
        return productService.inventoryMain;
            
    },
        function(newval, oldVal){
        if (oldVal !=  newval){
            console.log("from watch function from titleCtrl");
           
            console.log("New val");
            console.log(oldVal);
            console.log("oldVal");
          
            $scope.inventoryMain=newval;
            
             console.log(newval);
        }
    });
    
    
      $scope.$watch(function(){
        return productTypeService.productTypes;
            
    },
        function(newval, oldVal){
        if (oldVal !=  newval){
            console.log("from watch function from AppCtrl");
           
            console.log("New val");
            console.log(oldVal);
            console.log("oldVal");
          
            $scope.productTypes=newval;
            
             console.log(newval);
        }
    });
    
     $scope.$watch(function(){
        return productTypeService.getProductTypeIds;
            
    },
        function(newval, oldVal){
        if (oldVal !=  newval){
            console.log("from watch function from AppCtrl");
           
            console.log("New val");
            console.log(oldVal);
            console.log("oldVal");
          
            $scope.getProductTypeIds=newval;
            
             console.log(newval);
        }
    });
    
    
    
    
    
    
   $scope.test=function(id, name){

       
       productTypeService.id=id;
       productTypeService.getProductTypeIds();
       
       
      productService.id=id;
       productService.getMainList();
    
     

}
    
    
    
}]);

