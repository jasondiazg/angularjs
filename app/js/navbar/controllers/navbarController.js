(() =>{
    'use strict';

    let nbModule = angular.module("academik.navbar");

    nbModule.controller("NavbarController", ($scope, $academikNavbar) => {  
        $scope.isNavCollapsed = true;
        $scope.isCollapsed = false;
        $scope.isCollapsedHorizontal = false;

        $scope.addNavbarElement = () => {
            $academikNavbar.elements.add({ display: "New element", href: "" });
        }

        $scope.emptyNavbar = () => {
            $academikNavbar.elements.empty();
        }

        $scope.navbarElements = $academikNavbar.elements.get();
        $scope.content = "My content in navbar controller";

    });

})();