(() => {
    'use strict';
    let mainModule = angular.module("academik");

    mainModule.controller("ChuckNorrisController", function ($chuckNorrisService, $http, $filter, $timeout, $location, $interval) {
        let vm = this;

        let setDefaults = () => {
            setHeaders();
            loadData();
        }

        let loadData = () => {
            loadSimpleJoke();
            loadCategories();
            vm.getRandomJoke();
            $interval(callIntervals, 5000);
            vm.url = $location.absUrl();
        }

        let setHeaders = () => {
            vm.headers = ["#", "Joke", "Categories", "Created", "Updated", "Icon"];
        }

        let loadSimpleJoke = () => {
            $http({ method: "GET", url: "https://api.chucknorris.io/jokes/random" })
                .then((response) => { console.log(response); }, (error) => { console.error(error); });
        }

        let loadCategories = () => {
            $chuckNorrisService.getCategories(
                (response) => { vm.categories = response.data; },
                (error) => { console.error(error); }
            );
        }

        vm.getRandomJoke = () => {
            $chuckNorrisService.getRandomJoke(
                (response) => { vm.jokes = convertResponseDate(new Array(response.data)); },
                (error) => { console.error(error); }
            );
        }

        vm.getJokeByCategory = () => {
            $chuckNorrisService.getJokeByCategory(
                vm.category,
                (response) => { vm.jokes = convertResponseDate(new Array(response.data)); },
                (error) => { console.error(error); }
            );
        }

        vm.getJokeByQuery = () => {
            $chuckNorrisService.getJokeByQuery(
                vm.searchText,
                (response) => { if (response.data.total == 0) vm.jokes = []; else vm.jokes = convertResponseDate(response.data.result); },
                (error) => { console.error(error); }
            );
        }

        let convertResponseDate = (jokes) => {
            jokes.forEach(joke => { joke.created_at = $filter('date')(new Date(joke.created_at)); joke.updated_at = $filter('date')(new Date(joke.updated_at)); });
            return jokes;
        }

        vm.delayFunction = () => {
            console.log("Start...");
            $timeout((params) => { console.log("End..." + params.p1 + ", " + params.p2) }, 3000, false, { p1: "param1", p2: "param2" });
        }

        vm.changeUrl = () => {
            $location.url('/app/filters');
        }

        let callIntervals = () => {
            console.log("Interval occurred...");
        }

        setDefaults();
    });


})();