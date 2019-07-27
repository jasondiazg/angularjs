(() => {
    'use strict';

    var module = angular.module("academik");

    module.constant("environments", {
        "development": {
            "baseUrl": "http://localhost",
            "api": "api",
            "port": "3001"
        },
        "qa": {
            "baseUrl": "http://192.168.3.4",
            "api": "api",
            "port": "8080"
        },
        "production": {
            "baseUrl": "https://academik.com",
            "api": "api",
            "port": "80"
        }
    });
})();