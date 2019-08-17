(function () {
    'use strict';

    let mainModule = angular.module("academik");

    componentController.$inject = ["$authService", "$state"];

    function componentController($authService, $state) {
        let vm = this;

        // Initial Methods
        vm.$onInit = function () {
            checkSession();
        };

        const checkSession = () => {
            if ($authService.isAuthenticated()) {
                $state.go('app.helloWorld');
            }
        }

        const onSuccess = (response) => {
            $state.go('app.helloWorld');
        };

        vm.login = () => {
            $authService.login({ username: vm.username, password: vm.password }, onSuccess);
        }
        

        // ==============================================================================================================================================================
        // Properties & fields
        // ==============================================================================================================================================================

        // ==============================================================================================================================================================


        // ==============================================================================================================================================================
        // Methods
        // ==============================================================================================================================================================


        // ==============================================================================================================================================================

    };

    const component =
    {
        templateUrl: 'app/js/components/login/login.component.html',
        controller: componentController,
        controllerAs: 'vm',
        bindings:
        {
            connectionComponent: '='
        }
    };

    mainModule.component('loginComponent', component);

})();