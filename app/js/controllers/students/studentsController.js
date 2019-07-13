(() => {
    'use strict';
    let mainModule = angular.module("academik");

    mainModule.controller("StudentsController", function(EntityService) {
        let vm = this;
        let entityService;

        let setDefaults = () => {
            entityService = new EntityService("student");
            loadData();
            vm.initializeStudent();
        }

        let loadData = () => {
            loadHeaders();
            loadStudents();            
        }

        let loadHeaders = () => {
            vm.headers = entityService.loadHeaders();
        }

        let loadStudents = () => {
            vm.students = entityService.loadData();
        }

        vm.initializeStudent = () => {
            vm.student = {};
        }

        vm.saveStudent = () => {
            vm.student.birthdate = vm.student.birthdate ? new Date(vm.student.birthdate) : new Date();
            if (vm.student.name && vm.student.surname && vm.student.gender && vm.student.email) {
                if (vm.student.id) {
                    entityService.update(vm.student);
                } else {
                    entityService.save(vm.student);
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
            entityService.delete(index);
            loadStudents();
        }

        setDefaults();
    });


})();