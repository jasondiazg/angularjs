(() => {
    'use strict';
    let mainModule = angular.module("academik");

    mainModule.controller("StudentsController", function(EntityService, Notifier, $logger) {
        let vm = this;
        let studentService, notifier;

        let setDefaults = () => {
            studentService = new EntityService("student");
            notifier = new Notifier(true);
            loadData();
            vm.initializeStudent();
        }

        let loadData = () => {
            loadHeaders();
            loadStudents();            
        }

        let loadHeaders = () => {
            studentService.loadMetadata(
                (response) => {
                    if (response.data.error){
                        notifier.error(response.data.message);
                    } else {
                        notifier.success(response.data.message);
                        vm.headers = ["Order"];
                        for (let header in response.data.data) {
                            if (header != "updatedAt" && header != "createdAt" && header != "__v") {
                                vm.headers.push(transformToCapitalLetter(header));
                            }
                        }
                    }
                },
                (error) => { notifier.error(error.data.message); $logger.print(error); }
            );
        }

        let transformToCapitalLetter = (letter) => {
            if (letter == "_id") {
                return "Id";
            }
            return letter.substring(0,1).toUpperCase() + letter.substring(1,letter.length);
        }

        let loadStudents = () => {
            studentService.get(
                (response) => {
                    if (response.data.error){
                        notifier.error(response.data.message);
                    } else {
                        notifier.success(response.data.message);
                        vm.students = response.data.data;
                    }
                },
                (error) => { notifier.error(error.data.message); $logger.print(error); }
            );
        }

        vm.initializeStudent = () => {
            vm.student = {};
        }

        vm.saveStudent = () => {
            vm.student.birthdate = vm.student.birthdate ? new Date(vm.student.birthdate) : new Date();
            if (vm.student.name && vm.student.surname && vm.student.gender && vm.student.email) {
                if (vm.student.id) {
                    studentService.update(vm.student);
                } else {
                    studentService.save(vm.student);
                }
                loadStudents();
                vm.initializeStudent();    
            }
        }

        vm.modifyStudent = (student) => {
            vm.student = student;
            //vm.student.birthdate = vm.student.birthdate.getDate() + "/" + vm.student.birthdate.getMonth() + "/" + vm.student.birthdate.getFullYear();
        }

        vm.deleteStudent = (index) => {
            studentService.delete(index);
            loadStudents();
        }

        setDefaults();
    });


})();