let navbarModule = angular.module("academik.navbar");

navbarModule.controller("NavbarController", function($scope) {  
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
});