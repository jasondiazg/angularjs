(() => {
    'use strict';
    let mainModule = angular.module("academik", ["academik.navbar"]);

    mainModule.run(() => {
        
    });

    mainModule.controller("HelloWorldController", ($scope, $rootScope) => {
        $scope.logs = { messages: "" };
        $scope.name= "Academik Students";
        
        $scope.$on('eventEmited', (event, data) => {
            $scope.logs.messages +=  '\nHelloWorldController - receive event "' + event.name + '" with data = "' + data + '"';
        });
        
        $rootScope.$on('eventEmited', (event, data) => {
            $scope.logs.messages +=  '\nRoot scope - receive event "' + event.name + '" with data = "' + data + '"';
        });
    });

    mainModule.controller("HelloWorldParentController", ($scope) => {
        $scope.name= "Parent Controller";

        $scope.greetHelloWorldParent = () => {
            $scope.$broadcast('eventBroadcasted', $scope.name);
        }
  
        $scope.$on('eventEmited', (event, data) => {
            $scope.logs.messages +=  '\nHelloWorldParentController - receive event "' + event.name + '" with data = "' + data + '"';
        });
    });

    mainModule.controller("HelloWorldChildController", ($scope) => {
        $scope.name= "Child Controller";

        $scope.greetHelloWorldChild = () => {
            $scope.$emit('eventEmited', $scope.name);
        }
  
        $scope.$on('eventBroadcasted', (event, data) => {
            $scope.logs.messages +=  '\nHelloWorldChildController - receive event "' + event.name + '" with data = "' + data + '"';
        });
    });

})();