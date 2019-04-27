let mainModule = angular.module("academik", ["academik.navbar"]);

mainModule.controller("HelloWorldController", function($scope) {  
    $scope.name="Academik Students";
});