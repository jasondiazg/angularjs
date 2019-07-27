(() => {
    'use strict';

    var module = angular.module("academik");

    module.constant("entityData", {
        "student": {
            "endpoints": {
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