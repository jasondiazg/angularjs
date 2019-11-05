(function () {
    'use strict';

    let mainModule = angular.module("academik");

    componentController.$inject = ["Notifier", "$logger", "$http", "entityData", "$filter"];

    function componentController(Notifier, $logger, $http, entityData, $filter) {
        let vm = this;

        // ==============================================================================================================================================================
        // Properties & fields
        // ==============================================================================================================================================================
        let notifier;

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
            notifier = new Notifier(true);
            loadData();
        }

        const loadData = () => {
            loadEntities();
        }

        const loadEntities = () => {
            $http({ method: "GET", url: `${entityData.randomUserApi.randomUrl}?results=100` })
                .then(
                    (response) => {
                        vm.entities = response.data.results;
                        addCredits();
                    },
                    (error) => { notifier.error(error.data.message); $logger.print(error); }
                );
        }

        const addCredits = () => {
            vm.entities.forEach((student) => { student.credits = Math.random() * (100 - 1) + 1; });
        }

        // Publics
        // ==============================================================================================================================================================
        vm.next = {
            show: (position) => {
                position = parseInt(position);
                if (vm.entities && vm.entities.length > 0) {
                    if (position != undefined) {
                        if (position < vm.entities.length) {
                            if (position < vm.entities.length - 1) {
                                return `${vm.entities[position + 1].name.title} ${vm.entities[position + 1].name.first} ${vm.entities[position + 1].name.last}`;
                            }
                            return 'It is the last student.';
                        }
                        return 'Out of range position.';    
                    }
                    return 'Position is required.';
                }
                return 'There are no students yet.';
            }
        }

        vm.showCredits = (student, credits) => {
            notifier.info(`${student} has ${$filter('number')(credits)} credits!`);
        }

        // ==============================================================================================================================================================

    };

    const component =
    {
        templateUrl: 'app/js/components/academik/academik.component.html',
        controller: componentController,
        controllerAs: 'vm',
        bindings:
        {

        }
    };

    mainModule.component('academikComponent', component);

})();