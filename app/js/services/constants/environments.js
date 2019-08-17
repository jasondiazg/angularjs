(() => {
    'use strict';

    var module = angular.module("academik");

    module.constant("environments", {
        "development": {
            "protocol": "http",
            "domain": "localhost",
            "api": "api",
            "port": "3001"
        },
        "qa": {
            "protocol": "http",
            "domain": "http://192.168.3.4",
            "api": "api",
            "port": "8080"
        },
        "production": {
            "protocol": "https",
            "domain": "academik.com",
            "api": "api",
            "port": "80"
        }
    });
})();