(() => {
    'use strict';
    let mainModule = angular.module("academik", ["academik.navbar"]);

    mainModule.run(($rootScope) => {
        $rootScope.content = "My content in root scope";
    });

    mainModule.controller("HelloWorldController", ($scope) => {  
        $scope.name="Academik Students";
        $scope.content = "My content in hello world controller";
    });

})();