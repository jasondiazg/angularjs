(() => {
    'use strict';
    let mainModule = angular.module("academik", ["ui.router","academik.navbar"]);

    let mainModuleConfiguration = ($stateProvider, $locationProvider, $urlRouterProvider, $academikNavbarProvider) => {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/app/hello-world');

        let states = [
            {
                name: 'app',
                options: {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'app/app.html',
                    controller: 'AppController',
                    controllerAs: 'vm'
                }
            },
            {
                name: 'app.helloWorld',
                options: {
                    title: 'Hello World Angular JS',
                    url: '/hello-world',
                    templateUrl: 'app/js/controllers/helloWorld/helloWorld.html',
                    controller: 'HelloWorldController'
                }
            },
            {
                name: 'app.students',
                options: {
                    title: 'Students CRUD',
                    url: '/students',
                    templateUrl: 'app/js/controllers/students/students.html',
                    controller: 'StudentsController',
                    controllerAs: 'vm',
                }
            },
            {
                name: 'app.directives',
                options: {
                    title: 'Directives',
                    url: '/directives',
                    templateUrl: 'app/js/controllers/directives/directives.html',
                    controller: 'DirectivesController',
                    controllerAs: 'vm',
                }
            },
            {
                name: 'app.filters',
                options: {
                    title: 'Filters',
                    url: '/filters',
                    templateUrl: 'app/js/controllers/filters/filters.html',
                    controller: 'FiltersController',
                    controllerAs: 'vm',
                }
            },
            {
                name: 'app.services',
                options: {
                    title: 'Services',
                    url: '/services',
                    templateUrl: 'app/js/controllers/chuckNorris/chuckNorris.html',
                    controller: 'ChuckNorrisController',
                    controllerAs: 'vm',
                }
            }
        ];

        states.forEach(state => $stateProvider.state(state.name, state.options));

        // $stateProvider
        //     .state('app', {
        //         url: '/app',
        //         abstract: true,
        //         templateUrl: 'app/app.html',
        //         controller: 'AppController',
        //         controllerAs: 'vm',
        //         data: { }
        //     })
        //     .state('app.helloWorld', {
        //         title: 'Hello World Angular JS',
        //         url: '/hello-world',
        //         templateUrl: 'app/js/controllers/helloWorld/helloWorld.html',
        //         controller: 'HelloWorldController'
        //     })
        //     .state('app.students', {
        //         title: 'Students CRUD',
        //         url: '/students',
        //         templateUrl: 'app/js/controllers/student.html',
        //         controller: 'StudentController'
        //     });

        $academikNavbarProvider.setNavbarElements(states);
    };

    mainModule.config(mainModuleConfiguration);
    mainModuleConfiguration.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$academikNavbarProvider'];

    mainModule.run(() => {

    });

    mainModule.controller("AppController", function($academikNavbar) {
        let vm = this;

        vm.isNavCollapsed = true;
        vm.isCollapsed = false;
        vm.isCollapsedHorizontal = false;

        vm.navbarElements = $academikNavbar.elements.get();
    });

})();