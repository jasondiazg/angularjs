(function () {
    'use strict';

    let mainModule = angular.module("academik");

    componentController.$inject = ["EntityService", "Notifier", "$logger"];

    function componentController(EntityService, Notifier, $logger) {
        let vm = this;

        // ==============================================================================================================================================================
        // Properties & fields
        // ==============================================================================================================================================================
        let entityService, notifier;

        // ==============================================================================================================================================================


        // Initial Methods
        vm.$onInit = () => {
            setDefaults();
        };

        // ==============================================================================================================================================================
        // Methods
        // ==============================================================================================================================================================

        // Privates
        // ==============================================================================================================================================================
        const setDefaults = () => {
            entityService = new EntityService(vm.entityName);
            notifier = new Notifier(true);
            vm.requiredProperties = entityService.getRequiredProperties();
            vm.initializeEntity();
            loadData();
        }

        const loadData = () => {
            loadHeaders();
            loadEntities();
        }

        const loadHeaders = () => {
            entityService.loadMetadata(
                (response) => {
                    if (response.data.error) {
                        notifier.error(response.data.message);
                    } else {
                        notifier.success(response.data.message);
                        vm.headers = [{ display: "Order", value: "order" }];
                        for (let header in response.data.data) {
                            if (header != "updatedAt" && header != "createdAt" && header != "__v") {
                                vm.headers.push({ display: transformToCapitalLetter(header), value: header, type: transformToType(response.data.data[header].instance), required: isRequired(header) });
                            }
                        }
                    }
                },
                (error) => { if (error) notifier.error(error.data.message); $logger.print(error); }
            );
        }

        const transformToCapitalLetter = (letter) => {
            if (letter == "_id") {
                return "Id";
            }
            return letter.substring(0, 1).toUpperCase() + letter.substring(1, letter.length);
        }

        const transformToType = (type) => {
            switch (type) {
                case "String": {
                    return "text";
                }
                case "Date": {
                    return "date";
                }
                case "Number": {
                    return "number";
                }
                case "Boolean": {
                    return "checkbox";
                }
            }
        }

        const isRequired = (header) => {
            let required = false;
            if (vm.requiredProperties) {
                vm.requiredProperties.forEach(property => {
                    if (property == header) {
                        required = true;
                    }
                })
            }
            return required;
        }

        const loadEntities = () => {
            entityService.get(
                (response) => {
                    if (response.data.error) {
                        notifier.error(response.data.message);
                    } else {
                        notifier.success(response.data.message);
                        vm.entities = response.data.data;
                    }
                },
                (error) => { notifier.error(error.data.message); $logger.print(error); }
            );
        }

        const isValidEntity = () => {
            return checkRequiredFields();
        }

        const checkRequiredFields = () => {
            let isValid = true;
            if (vm.requiredProperties) {
                vm.requiredProperties.forEach(property => {
                    if (!vm.entity[property]) {
                        isValid = false;
                    }
                })
            }
            return isValid;
        }

        const success = (response) => { loadEntities(); vm.initializeEntity(); notifier.success(response.data.message); }
        const error = (response) => { notifier.error(response.data.message); }

        // Publics
        // ==============================================================================================================================================================
        vm.initializeEntity = () => {
            vm.entity = {};
        }

        vm.save = () => {
            if (isValidEntity()) {
                if (vm.entity._id) {
                    entityService.update(vm.entity, success, error);
                } else {
                    entityService.save(vm.entity, success, error);
                }
            } else {
                notifier.error("There are empty required properties.");
            }
        }

        vm.modify = (entity) => {
            vm.entity = entity;
        }

        vm.delete = (id) => {
            entityService.delete(id, success, error);
        }

        // ==============================================================================================================================================================

    };

    const component =
    {
        templateUrl: 'app/js/components/entity/entity.component.html',
        controller: componentController,
        controllerAs: 'vm',
        bindings:
        {
            entityName: '@'
        }
    };

    mainModule.component('entityComponent', component);

})();