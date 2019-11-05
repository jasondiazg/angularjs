(() => {
    'use strict';

    var module = angular.module("academik");

    module.constant("entityData", {
        "auth": {
            "endpoints": {
                "BASE": "login",
                "POST": "login",
                "LOGOUT": "logout",
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
            },
            "requiredProperties": ["name", "surname", "gender", "email"]
        },
        "user": {
            "endpoints": {
                "BASE": "user",
                "GET": "user",
                "POST": "user",
                "PUT": "user",
                "DELETE": "user",
                "GETMetadata": "user/metadata"
            },
            "requiredProperties": ["username"]
        },
        "randomUserApi": {
            "randomUrl": "https://randomuser.me/api/"
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