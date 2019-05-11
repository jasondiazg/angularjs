(() => {
    'use strict';
    let mainModule = angular.module("academik");

    mainModule.controller("HelloWorldController", function($scope, $rootScope) {
        $scope.logs = { messages: "" };
        $scope.name= "Academik Students";
        
        $scope.$on('eventEmited', (event, data) => {
            $scope.logs.messages +=  '\nHelloWorldController - receive event "' + event.name + '" with data = "' + data + '"';
        });
        
        $rootScope.$on('eventEmited', (event, data) => {
            $scope.logs.messages +=  '\nRoot scope - receive event "' + event.name + '" with data = "' + data + '"';
        });

        $scope.$watch((scope) => { return scope.name; }, (newValue, oldValue) => { $scope.newValueName = newValue; $scope.oldValueName = oldValue; });
        
        $scope.time = new Date();

        $scope.updateTime = () => { $scope.time = new Date(); }

        //document.getElementById("updateTimeButton").addEventListener('click', () => { $scope.time = new Date(); $scope.$digest(); });
        document.getElementById("updateTimeButton").addEventListener('click', () => { $scope.$apply(() => { $scope.time = new Date(); }) });
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