(() => {
    'use strict';
    let mainModule = angular.module("academik", ["ui.router", "uiRouterStyles", "academik.navbar", "angular-jwt", "oc.lazyLoad"]);

    let mainModuleConfiguration = ($stateProvider, $locationProvider, $urlRouterProvider, $academikNavbarProvider, greet, $loggerProvider, $environmentProvider, jwtOptionsProvider, environments, $httpProvider) => {
        const logLevel = "DEVELOP";
        const environment = "development";

        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise("/login");

        let states = [
            {
                name: "app",
                options: {
                    url: "/app",
                    abstract: true,
                    templateUrl: "app/app.html",
                    controller: "AppController",
                    controllerAs: "vm"
                }
            },
            {
                name: "login",
                options: {
                    title: "Login",
                    url: "/login",
                    template: "<login-component></login-component>",
                    data: { css: ['app/css/login.css'] }
                }
            },
            {
                name: "app.helloWorld",
                options: {
                    title: "Hello World Angular JS",
                    url: "/hello-world",
                    templateUrl: "app/js/controllers/helloWorld/helloWorld.html",
                    controller: "HelloWorldController"
                }
            },
            {
                name: "app.students",
                options: {
                    title: "Students CRUD",
                    url: "/students",
                    templateUrl: "app/js/controllers/students/students.html",
                    controller: "StudentsController",
                    controllerAs: "vm"
                }
            },
            {
                name: "app.directives",
                options: {
                    title: "Directives",
                    url: "/directives",
                    templateUrl: "app/js/controllers/directives/directives.html",
                    controller: "DirectivesController",
                    controllerAs: "vm",
                }
            },
            {
                name: "app.filters",
                options: {
                    title: "Filters",
                    url: "/filters",
                    templateUrl: "app/js/controllers/filters/filters.html",
                    controller: "FiltersController",
                    controllerAs: "vm",
                }
            },
            {
                name: "app.chuckNorrisApi",
                options: {
                    title: "Chuck Norris Api",
                    url: "/chuck-norris",
                    templateUrl: "app/js/controllers/chuckNorris/chuckNorris.html",
                    controller: "ChuckNorrisController",
                    controllerAs: "vm",
                }
            },
            {
                name: "app.calculator",
                options: {
                    title: "Calculator",
                    url: "/calculator",
                    templateUrl: "app/js/controllers/calculator/calculator.html",
                    controller: "CalculatorController",
                    controllerAs: "vm",
                }
            }
        ];

        states.forEach(state => $stateProvider.state(state.name, state.options));

        // $stateProvider
        //     .state("app", {
        //         url: "/app",
        //         abstract: true,
        //         templateUrl: "app/app.html",
        //         controller: "AppController",
        //         controllerAs: "vm",
        //         data: { }
        //     })
        //     .state("app.helloWorld", {
        //         title: "Hello World Angular JS",
        //         url: "/hello-world",
        //         templateUrl: "app/js/controllers/helloWorld/helloWorld.html",
        //         controller: "HelloWorldController"
        //     })
        //     .state("app.students", {
        //         title: "Students CRUD",
        //         url: "/students",
        //         templateUrl: "app/js/controllers/student.html",
        //         controller: "StudentController"
        //     });

        $academikNavbarProvider.setNavbarElements(states);
        console.log("Config stage... " + greet);
        console.log(environments[environment].domain + ':' + environments[environment].port);

        $loggerProvider.setLogLevel(logLevel);
        $environmentProvider.setEnvironment(environment);

        jwtOptionsProvider.config({
            tokenGetter: ['options',
                (options) => {
                    if (options && options.url.substr(options.url.length - 5) == '.html') {
                        return null;
                    }

                    return sessionStorage.getItem('sessionToken');
                }],

            whiteListedDomains: [environments[environment].domain]
        });

        //$httpProvider.interceptors.push('jwtInterceptor');
        $httpProvider.interceptors.push('tokenInterceptor');
    };

    mainModule.config(mainModuleConfiguration);
    mainModuleConfiguration.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider", "$academikNavbarProvider", "greet", "$loggerProvider", "$environmentProvider", "jwtOptionsProvider", "environments", "$httpProvider"];

    let runFunction = (greet, greetValue, $authService, $state, $timeout, $transitions) => {
        console.log("Run stage..." + greetValue);
        console.log("Run stage..." + greet);

        $transitions.onSuccess({}, () => {
            if (!$authService.isAuthenticated()) {
                $timeout(() => { $state.go('login') });
            }
        });

    }

    mainModule.run(runFunction);
    runFunction.$inject = ["greet", "greetValue", "$authService", "$state", "$timeout", "$transitions"];

    mainModule.controller("AppController", function ($academikNavbar, $authService, $state) {
        let vm = this;

        vm.isNavCollapsed = true;
        vm.isCollapsed = false;
        vm.isCollapsedHorizontal = false;

        vm.navbarElements = $academikNavbar.elements.get();

        vm.logout = () => {
            $authService.logout();
            $state.go('login');
        }
    });

})();