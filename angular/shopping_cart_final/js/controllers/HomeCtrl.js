angular.module("shoppingCart").controller("HomeCtrl", ["$scope", "productTypeService",  function($scope, productTypeService){
    
    $scope.productTypes = productTypeService.productTypes;
    
    
    
}]);

//$scope.test=function(id){
//    
//    var itemTypeId=id;
//    for (var i=0;i<$scope.productType.length;i++){
//       if($scope.productType[i].id=productTypeId){
//           $scope.title=$scope.productType[i].type;
//       }
//    }
//    
//}