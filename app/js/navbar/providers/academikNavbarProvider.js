(() => {
    'use strict';

    var module = angular.module("academik.navbar");

    module.provider("$academikNavbar", [function() {
        var $navbarElements = [];
    
        this.setNavbarElements = (elements) => {
            console.log("Configuring navbar...");
            $navbarElements = elements;
        };

        // SERVICE INSTANCE __________________________________________________________________________________________________________________________________
        // ===================================================================================================================================================
        this.$get = [() => {

            var navbar = {}

            //Properties and Fields___________________________________________________________________________________________________________________________
            //================================================================================================================================================
            
            //Fields

            navbar.elements = 
            {
                get: () => { return $navbarElements; },
                add: (element) => { $navbarElements.push(element); },
                empty: () => { $navbarElements.length = 0; }
            }

            return navbar;
        }];
    }]);

})();