(() => {
    "use strict";
    let mainModule = angular.module("academik");

    mainModule.controller("DirectivesController", function() {
        let vm = this;

        let setDefaults = () => {
            vm.list = [["a", "b"], ["c", "d"]];
            vm.fruitHeaders = ["$index", "$first", "$middle", "$last", "$even", "$odd", "name"]
            vm.fruits = [
                { name: "apple", color: "red" },
                { name: "orange", color: "orange" },
                { name: "grapes", color: "purple" },
                { name: "strawberry", color: "pink" },
                { name: "blueberry", color: "blue" },
                { name: "banana", color: "yellow" },
                { name: "coconut", color: "white" }
            ];
            vm.allSelected = false;

            vm.templates = [
                { name: "template1.html", url: "app/js/controllers/directives/template1.html"},
                { name: "template2.html", url: "app/js/controllers/directives/template2.html"}
            ];
            vm.template = vm.templates[0];

            vm.ifShowHide = true;

            vm.inputTypes = ["text", "number", "password", "email", "url"];
            vm.type = "email";

            vm.inputEvent2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

            vm.make = [
                {
                    name: "Toyota", 
                    models: [
                                { name: "Yaris" },
                                { name: "Agya" },
                                { name: "Corolla" }
                    ]
                },
                {
                    name: "Honda", 
                    models: [
                                { name: "Civic" },
                                { name: "City" },
                                { name: "Accord" }
                    ]
                },
                {
                    name: "Mazda", 
                    models: [
                                { name: "m2" },
                                { name: "m3" },
                                { name: "m6" }
                    ]
                }
            ];

            vm.make.forEach(make => {
                make.models.forEach (model => {
                    console.log("make: " + make.name + ", model: " + model.name);
                });
            });

            vm.myClass = "green";

        }

        let getRandomType = () => {
            let types = ["error", "success", "info", "question"]
            return types[Math.floor(Math.random() * (3 - 0 + 1) ) + 0];
        }

        vm.selectDeselectAll = () => {
            if (vm.allSelected) {
                vm.fruits.forEach(fruit => fruit.selected = false);
            } else {
                vm.fruits.forEach(fruit => fruit.selected = true);
            }
            vm.allSelected = !vm.allSelected;
        }

        vm.evaluateIfShowHide = () => {
            return vm.ifShowHide;
        }

        vm.fireEvent = (typeEvent) => {
            let toast = swal.mixin({ toast: true, position: "bottom-end", showConfirmButton: false, timer: 3000 });

            toast({ type: getRandomType(), title: "You have fired the " + typeEvent + " event..." });
        }

        vm.getFruitClass = (fruit) => {
            if (fruit.selected) {
                return "green";
            } else {
                return fruit.color
            }
        }

        vm.fruitClass = "green";

        setDefaults();
    });


})();