(() =>{
    'use strict';

    let navbarModule = angular.module("academik.navbar", ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

    let configNavbar = ($academikNavbarProvider) => {
        let navbarElements = [{ display: "Menu 1", href: "" }, { display: "Menu 2", href: "" }, { display: "Menu 3", href: "" }];

        $academikNavbarProvider.setNavbarElements(navbarElements);
        console.log("Navbar was configured successfully...");
    }

    let runNavbar = () => {
        console.log("Navbar run successfully...");
    }

    navbarModule.config(configNavbar).run(runNavbar);

    configNavbar.$inject = ['$academikNavbarProvider'];

})();
