(() => {
    'use strict';

    var module = angular.module("academik");

    module.factory("EntityService", function (entityData) {

        var entityService = function (entityName) {
            this.loadData = () => {
                let data = JSON.parse(localStorage.getItem(entityName));
                if (!data) {
                    return entityData[entityName].staticData;
                }
                return data;
            }

            this.loadHeaders = () => {
                return entityData[entityName].headers;
            }

            this.save = (entity) => {
                let entities = this.loadData();

                entities.sort((a, b) => {
                    if (a.id < b.id)
                        return -1;
                    if (a.id > b.id)
                        return 1;
                    return 0;
                });
        
                let newId = entities[entities.length - 1].id + 1;
                entity.id = newId;

                entities.push(entity);
                localStorage.setItem(entityName, JSON.stringify(entities));
            }

            this.replace = (entities) => {
                localStorage.setItem(entityName, JSON.stringify(entities));
            }

            this.update = (entityToUpdate) => {
                let entities = this.loadData();
                let index = entities.map(entity => entity.id).indexOf(entityToUpdate.id);

                if (index != -1) {
                    entities[index] = entityToUpdate;
                }

                this.replace(entities);
            }

            this.delete = (index) => {
                let entities = this.loadData();
                entities.splice(index, 1);
                this.replace(entities);
            }
        };

        return entityService;
    });

})();