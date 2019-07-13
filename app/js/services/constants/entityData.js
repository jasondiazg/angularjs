(() => {
    'use strict';

    var module = angular.module("academik");

    module.constant("entityData", {
        "student": {
            "headers": ["Order", "Id", "Name", "Surname", "Birthdate", "Gender", "Email", "Actions"],
            "staticData": [

                { id: 1, name: "Pedro", surname: "Martinez", birthdate: new Date("05/08/1988"), gender: "Male", email: "pedro.martinez@gmail.com" },
                { id: 2, name: "Luis", surname: "Alvarez", birthdate: new Date("03/04/1985"), gender: "Male", email: "luis.alvarez@gmail.com" },
                { id: 3, name: "María", surname: "Hernandez", birthdate: new Date("09/07/1993"), gender: "Female", email: "maria.hernandez@gmail.com" },
                { id: 4, name: "Sergio", surname: "Ochoa", birthdate: new Date("11/10/1989"), gender: "Male", email: "sergio.ochoa@gmail.com" },
                { id: 5, name: "Elizabeth", surname: "Duarte", birthdate: new Date("09/04/1992"), gender: "Female", email: "elizabeth.duarte@gmail.com" }
            ]
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