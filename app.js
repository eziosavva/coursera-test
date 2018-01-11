(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController'), function ($scope) {
$scope.name = "Ezio Savva";
$scope.sayHello = function () {
  return "Hello Coursera";
  
}

});

})();
