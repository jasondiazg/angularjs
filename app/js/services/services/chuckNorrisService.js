(() => {
    'use strict';

    var module = angular.module("academik");

    module.service("$chuckNorrisService", function($http, urls) {
        let buildConfig = (options) => {
            let config = {
                method: "GET",
                url: urls.chuckNorrisApi.baseUrl,
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
            let config = buildConfig({ urlComplement: urls.chuckNorrisApi.random });
            $http(config).then(actionSuccess, actionError);
        }

        this.getCategories = (actionSuccess, actionError) => {
            let config = buildConfig({ urlComplement: urls.chuckNorrisApi.categories });
            $http(config).then(actionSuccess, actionError);
        }

        this.getJokeByCategory = (category, actionSuccess, actionError) => {
            let config = buildConfig({ urlComplement: urls.chuckNorrisApi.random + urls.chuckNorrisApi.categoryParam + category });
            $http(config).then(actionSuccess, actionError);
        }

        this.getJokeByQuery = (searchText, actionSuccess, actionError) => {
            let config = buildConfig({ urlComplement: urls.chuckNorrisApi.query + searchText });
            $http(config).then(actionSuccess, actionError);
        }

    });

})();