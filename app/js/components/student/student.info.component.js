(function () {
    'use strict';

    let mainModule = angular.module("academik");

    componentController.$inject = [];

    function componentController() {
        let vm = this;

        // ==============================================================================================================================================================
        // Properties & fields
        // ==============================================================================================================================================================

        // ==============================================================================================================================================================


        // Initial Methods
        vm.$onInit = () => {
            setDefaults();
        };

        // ==============================================================================================================================================================
        // Methods
        // ==============================================================================================================================================================

        // Privates
        // ==============================================================================================================================================================
        const setDefaults = () => {
            vm.nextStudent = vm.next.show(vm.position);
        }


        // Publics
        // ==============================================================================================================================================================


        // ==============================================================================================================================================================

    };

    const component =
    {
        templateUrl: 'app/js/components/student/student.info.component.html',
        controller: componentController,
        controllerAs: 'vm',
        bindings:
        {
            student: '<',
            position: '@',
            next: '=',
            credits: '&'
        }
    };

    mainModule.component('studentInfoComponent', component);

})();