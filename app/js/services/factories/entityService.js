(() => {
    'use strict';

    var module = angular.module("academik");

    module.factory("EntityService", function (entityData, $http, environments, $environment) {

        let entityService = function (entityName) {
            let buildConfig = (options) => {
                let config = {
                    method: "GET",
                    url: environments[$environment.getEnvironment()].baseUrl + ":" + 
                         environments[$environment.getEnvironment()].port + "/" + 
                         environments[$environment.getEnvironment()].api,
                };
    
                if (options.method) {
                    config.method = options.method;
                }
    
                if (options.urlComplement) {
                    config.url += options.urlComplement;
                }
    
                if (options.body) {
                    config.body = options.body;
                }
    
                return config;
            }

            this.loadMetadata = (actionSuccess, actionError) => {
                let config = buildConfig({ urlComplement: "/" + entityData[entityName].endpoints.GETMetadata });
                $http(config).then(actionSuccess, actionError);
            }

            this.get = (actionSuccess, actionError) => {
                let config = buildConfig({ urlComplement: "/" + entityData[entityName].endpoints.GET });
                $http(config).then(actionSuccess, actionError);
            }

            this.getEntity = (id, actionSuccess, actionError) => {
                let config = buildConfig({ urlComplement: "/" + entityData[entityName].endpoints.GET + "/" + id });
                $http(config).then(actionSuccess, actionError);
            }

            this.save = (entity, actionSuccess, actionError) => {
                let config = buildConfig({ urlComplement: "/" + entityData[entityName].endpoints.POST, body: entity, method: "POST" });
                $http(config).then(actionSuccess, actionError);
            }

            this.update = (entity, actionSuccess, actionError) => {
                let config = buildConfig({ urlComplement: "/" + entityData[entityName].endpoints.PUT, body: entity, method: "PUT" });
                $http(config).then(actionSuccess, actionError);
            }

            this.delete = (id, actionSuccess, actionError) => {
                let config = buildConfig({ urlComplement: "/" + entityData[entityName].endpoints.DELETE + "/" + id, method: "DELETE" });
                $http(config).then(actionSuccess, actionError);
            }

        };

        return entityService;
    });

})();