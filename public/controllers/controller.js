var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log('App Controller working properly');

var refresh = function(){
    $http.get('contactList').success(function(res){
      console.log('Data received from GET request');
      $scope.contactList = res;
      $scope.contact = '';
    })
}; //end refresh function

refresh();

    //ADD CONTACT
    //retrieves data from form and sends POST request
    $scope.addContact = function(){
      //DATA sent to server
      console.log($scope.newContact);
      //POST request to server
      $http.post('/contactList', $scope.newContact).success(function(res){
        //DATA received from server (upon success)
        console.log(res);
        refresh();
      });
    }//end addContact function

    //REMOVE CONTACT
    $scope.remove = function(id){
      console.log(id);
      //DELETE request to server
      $http.delete('/contactList/' + id).success(function(res){
        refresh();
      })
    }

    $scope.edit = function(id){
      console.log(id);
      $http.get('/contactList/' + id).success(function(res){
        $scope.newContact = res;
      })
    }

}]); //end myApp controller
