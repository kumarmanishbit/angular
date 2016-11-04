var app = angular.module('app', []);

app.controller('MainCtrl', function ($scope){
  var self = this;
   $scope.message = 'hello';
  //self.message='hello world';


$scope.updateMessage = function(message){
    $scope.message = message;
  };

});