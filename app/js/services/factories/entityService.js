(() => {
    'use strict';

    var module = angular.module("academik");

    // module.factory("EntityService", function (entityData, $http, environments, $environment) {
    module.factory("EntityService", function (entityData, environments, $environment, $injector) {

        let entityService = function (entityName) {
            
            let buildConfig = (options) => {
                let config = {
                    method: "GET",
                    url: getBaseUrl(),
                };

                if (options.method) {
                    config.method = options.method;
                }

                if (options.urlComplement) {
                    config.url += options.urlComplement;
                }

                if (options.body) {
                    config.data = options.body;
                }

                if (options.headers) {
                    config.headers = options.headers
                } else {
                    config.headers = { 'Content-Type': 'application/json; charset=utf-8' };
                }

                return config;
            }

            let getBaseUrl = () => {
                return environments[$environment.getEnvironment()].protocol + "://" +
                    environments[$environment.getEnvironment()].domain + ":" +
                    environments[$environment.getEnvironment()].port + "/" +
                    environments[$environment.getEnvironment()].api;
            }

            this.loadMetadata = (actionSuccess, actionError) => {
                let $http = $injector.get('$http');
                let config = buildConfig({ urlComplement: "/" + entityData[entityName].endpoints.GETMetadata });
                $http(config).then(actionSuccess, actionError);
            }

            this.get = (actionSuccess, actionError) => {
                let $http = $injector.get('$http');
                let config = buildConfig({ urlComplement: "/" + entityData[entityName].endpoints.GET });
                $http(config).then(actionSuccess, actionError);
            }

            this.getEntity = (id, actionSuccess, actionError) => {
                let $http = $injector.get('$http');
                let config = buildConfig({ urlComplement: "/" + entityData[entityName].endpoints.GET + "/" + id });
                $http(config).then(actionSuccess, actionError);
            }

            this.save = (entity, actionSuccess, actionError) => {
                let $http = $injector.get('$http');
                let config = buildConfig({ urlComplement: "/" + entityData[entityName].endpoints.POST, body: entity, method: "POST" });
                $http(config).then(actionSuccess, actionError);
            }

            this.update = (entity, actionSuccess, actionError) => {
                let $http = $injector.get('$http');
                let config = buildConfig({ urlComplement: "/" + entityData[entityName].endpoints.PUT, body: entity, method: "PUT" });
                $http(config).then(actionSuccess, actionError);
            }

            this.delete = (id, actionSuccess, actionError) => {
                let $http = $injector.get('$http');
                let config = buildConfig({ urlComplement: "/" + entityData[entityName].endpoints.DELETE + "/" + id, method: "DELETE" });
                $http(config).then(actionSuccess, actionError);
            }

            this.baseUrl = () => {
                return getBaseUrl() + "/" + entityData[entityName].endpoints.BASE;
            }

        };

        return entityService;
    });

})();