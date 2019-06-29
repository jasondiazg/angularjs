(() => {
    'use strict';

    var module = angular.module("academik");

    module.service("$chuckNorrisService", function($http) {
        let url = "https://api.chucknorris.io/jokes";
        let random = "/random";
        let categories = "/categories";
        let categoryParam = "?category=";
        let query = "/search?query=";

        let buildConfig = (options) => {
            let config = {
                method: "GET",
                url: url,
            };

            if (options.method) {
                config.method = options.method;
            }

            if (options.urlComplement) {
                config.url += options.urlComplement;
            }

            return config;
        }

        this.getRandomJoke = (actionSuccess, actionError) => {
            let config = buildConfig({ urlComplement: random });
            $http(config).then(actionSuccess, actionError);
        }

        this.getCategories = (actionSuccess, actionError) => {
            let config = buildConfig({ urlComplement: categories });
            $http(config).then(actionSuccess, actionError);
        }

        this.getJokeByCategory = (category, actionSuccess, actionError) => {
            let config = buildConfig({ urlComplement: random + categoryParam + category });
            $http(config).then(actionSuccess, actionError);
        }

        this.getJokeByQuery = (searchText, actionSuccess, actionError) => {
            let config = buildConfig({ urlComplement: query + searchText });
            $http(config).then(actionSuccess, actionError);
        }

    });

})();