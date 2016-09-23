//angular.module('app').controller('AppCtrl',function($scope) {
// $scope.person={
 //   'name':'John doe'
    
// };
    
//});

//angular.module('app').controller('AppCtrl',function($scope) {
   // $scope.itemTypes=['home','Electronics','Gaming','cell','Appliances','Computers'];
//});
angular.module('app').controller('AppCtrl',['$scope','itemTypesService',function($scope,itemTypesService) {
  $scope.itemTypes=['home','Electronics','Gaming','cell','Appliances','Computers'];
    console.log(itemTypesService.itemTypes);
    $scope.abc=itemTypesService.itemTypes;
}]);