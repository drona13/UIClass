//angular.module('shoppingCart').controller("titleCtrl",["$scope", "productService","productTypeService",function($scope, productService, productTypeService) {
//    
////    $scope.title = "Hello and Welcome";
////    
////    $scope.inventoryTitle="";
////    $scope.inventoryType="";
////    console.log("From controller");
////    console.log(productTypeService.productTypes);
////   
////    
////    
////    $scope.$watch(function(){
////        return productService.inventoryMain;
////            
////    },
////        function(newval, oldVal){
////        if (oldVal !=  newval){
////            console.log("from watch function from titleCtrl");
////           
////            console.log("New val");
////            console.log(oldVal);
////            console.log("oldVal");
////          
////            $scope.inventoryMain=newval;
////            
////             console.log(newval);
////        }
////    });
////   $scope.test=function(id, type){
////
////      
////      var itemId = id;
////       var itemType = type;
////       titleService.currentId = id;
////       titleService.currentType = type;
////       titleService.getItemList();
////      
////     $scope.title= type;
////     
////
////}
//       
//}]);
