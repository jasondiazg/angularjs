(() => {
    'use strict';
    let mainModule = angular.module("academik");

    mainModule.controller("StudentsController", function() {
        let vm = this;

        let setDefaults = () => {
            loadData();
            vm.initializeStudent();
        }

        let loadData = () => {
            vm.headers = JSON.parse(localStorage.getItem("headers-student"));
            vm.students = JSON.parse(localStorage.getItem("students"));

            if (!vm.headers) {
                vm.headers = ["Order", "Id", "Name", "Surname", "Birthdate", "Gender", "Email", "Actions"];
                localStorage.setItem("headers-student", JSON.stringify(vm.headers));
            }

            if (!vm.students) {
                vm.students = [
                    { name: "Pedro", surname: "Martinez", birthdate: new Date("05/08/1988"), gender: "Male", email: "pedro.martinez@gmail.com" },
                    { name: "Luis", surname: "Alvarez", birthdate: new Date("03/04/1985"), gender: "Male", email: "luis.alvarez@gmail.com" },
                    { name: "María", surname: "Hernandez", birthdate: new Date("09/07/1993"), gender: "Female", email: "maria.hernandez@gmail.com" },
                    { name: "Sergio", surname: "Ochoa", birthdate: new Date("11/10/1989"), gender: "Male", email: "sergio.ochoa@gmail.com" },
                    { name: "Elizabeth", surname: "Duarte", birthdate: new Date("09/04/1992"), gender: "Female", email: "elizabeth.duarte@gmail.com" }
                ];

                vm.students.forEach(student => student.id = getRandomId());
                saveData();
            }
        }

        vm.initializeStudent = () => {
            vm.student = {};
        }

        let getRandomId = () => {
            return Math.floor(Math.random() * (+100 - +1)) + +1;
        }

        let saveData = () => {
            localStorage.setItem("students", JSON.stringify(vm.students));
        }

        vm.saveStudent = () => {
            vm.student.birthdate = vm.student.birthdate ? new Date(vm.student.birthdate) : new Date();
            if (vm.student.name && vm.student.surname && vm.student.gender && vm.student.email) {
                if (vm.student.id) {
                    vm.students.forEach(student => { if (student.id == vm.student.id) student = vm.student; });
                } else {
                    vm.student.id = getRandomId();
                    vm.students.push(vm.student);
                }
                saveData();
                vm.initializeStudent();    
            }
        }

        vm.modifyStudent = (student) => {
            vm.student = student;
            //vm.student.birthdate = vm.student.birthdate.getDate() + "/" + vm.student.birthdate.getMonth() + "/" + vm.student.birthdate.getFullYear();
        }

        vm.deleteStudent = (index) => {
            vm.students.splice(index, 1);
            saveData();
        }

        setDefaults();
    });


})();