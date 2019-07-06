(() => {
    'use strict';

    var module = angular.module("academik");

    module.provider("$logger", [function() {
        var $logLevel = [];
    
        this.setLogLevel = (level) => {
            $logLevel = level;
        };

        // SERVICE INSTANCE __________________________________________________________________________________________________________________________________
        // ===================================================================================================================================================
        this.$get = [() => {

            var logger = {}

            logger.print = (message) => {
                switch($logLevel) {
                    case "DEBUG": {
                        console.info(message);
                        break;
                    }
                    case "DEVELOP": {
                        console.log(message);
                        break;
                    }
                    case "QA": {
                        console.warn(message);
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }

            return logger;
        }];
    }]);

})();