(function () {
    'use strict';

    angular.module('academik').factory('tokenInterceptor', factory);

    factory.$inject = ['jwtHelper', '$authService'];

    function factory(jwtHelper, $authService) {
        const request = (config) => {
            if (config && config.url.substr(config.url.length - 5) == '.html' || (config.url && (config.url === $authService.getAuthUrl())))
                return config;
            return evaluateToken(config);
        };

        const evaluateToken = (config) => {
            const token = $authService.getAuthToken();
            if (token) {
                if (jwtHelper.isTokenExpired(token)) {
                    $authService.logout();
                }
                setLastAutorizationHeader(config);
                return config;
            } else {
                return config;
            }
        }

        const setLastAutorizationHeader = (config) => {
            config.headers.Authorization = 'Bearer ' + $authService.getAuthToken();
        }

        return {
            request: request
        };
    };

})();