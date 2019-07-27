(() => {
    'use strict';

    var module = angular.module("academik");

    module.provider("$environment", [function() {
        var $environmentLevel = [];
    
        this.setEnvironment = (environment) => {
            $environmentLevel = environment;
        };

        // SERVICE INSTANCE __________________________________________________________________________________________________________________________________
        // ===================================================================================================================================================
        this.$get = [() => {

            var environment = {}

            environment.getEnvironment = () => {
                return $environmentLevel;
            }

            return environment;
        }];
    }]);

})();