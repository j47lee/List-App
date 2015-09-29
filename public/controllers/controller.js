var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log('App Controller working properly');

    $http.get('contactList').success(function(res){
      console.log('Data received from GET request');
      $scope.contactList = res
    })


}]);
