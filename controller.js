var myApp = angular.module('myApp',['ngResource']);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);



myApp.controller('Hello', function($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
});


myApp.controller('myServiceCtrl', function ($scope, $http) {
$scope.doJSONPRequest = function () {
var url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK";
$http.jsonp(url)
.success(function (data, status, headers, config) {
$scope.details = data.found;
$scope.statcode = status;
})
.error(function (data, status, headers, config) {
$scope.statcode = status;
});
}
});


myApp.controller('stackOverFlow', function ($scope, $http) {
$scope.doJSONPRequest = function () {
var url = "http://localhost:9090/api/rest/domains?callback=JSON_CALLBACK";
console.log(url);
var callbackId = '_' + (angular.callbacks.counter - 1).toString(36);
angular.callbacks[callbackId]

console.log(callbackId);
$http.jsonp(url).success(function (data, status, headers, config) {
$scope.statcode = status;
console.log(data);
}).error(function (data, status, headers, config) {
$scope.statcode = status;
console.log("Failed: " + status);
});
}
});