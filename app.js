(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', ['$scope' function($scope)  {
  $scope.username = "Ezio";

  $scope.sayHello = function () {
    $scope.greeting = 'Hello ' + $scope.username + '!';

  };
}]);
