(() => {
    'use strict';

    var module = angular.module("academik");

    module.constant("entityData", {
        "auth": {
            "endpoints": {
                "BASE": "login",
                "POST": "login",
            }
        },
        "student": {
            "endpoints": {
                "BASE": "student",
                "GET": "student",
                "POST": "student",
                "PUT": "student",
                "DELETE": "student",
                "GETMetadata": "student/metadata"
            }
        },
        "hobbies": {
            "headers": [
                "name",
                "description"
            ],
            "staticData": [
                {
                    "name": "Gaming",
                    "description": "Gaming is a lifestyle."
                }
            ]
        }
    });
})();