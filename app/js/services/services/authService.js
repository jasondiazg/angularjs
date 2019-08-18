(() => {
    'use strict';

    var module = angular.module("academik");

    module.service("$authService", function (EntityService, Notifier, jwtHelper) {
        let entityService = new EntityService("auth");
        let notifier = new Notifier(true);

        /* Public functions */
        this.isAuthenticated = () => {
            return (isAValidToken() && this.getUserData() && this.getUserData().id);
        }

        this.getUserData = () => {
            const token = this.getAuthToken();
            if (token) {
                return getTokenData(token);
            }
            return undefined;
        }

        this.login = (entity, actionSuccess, actionError) => {
            entityService.save(entity, onEndActionSuccess(actionSuccess), oneEndActionError(actionError));
        }

        this.logout = () => {
            sessionStorage.removeItem('sessionToken');
        }

        this.getAuthUrl = () => {
            return entityService.baseUrl();
        }

        this.getAuthToken = () => {
            return sessionStorage.getItem('sessionToken');
        }

        /* Private functions */

        let onEndActionSuccess = (actionSuccess) => {
            return (response) => {
                sessionStorage.setItem('sessionToken', response.data.data);
                if (actionSuccess) {
                    actionSuccess(response);
                }
            }
        }

        let oneEndActionError = (actionError) => {
            return (response) => {
                notifier.error(response.data.message);
                if (actionError) {
                    actionError(response);
                }
            }
        }

        let getTokenData = (token) => {
            return jwtHelper.decodeToken(token);
        }

        let isAValidToken = () => {
            const token = this.getAuthToken();
            if (token) {
                return !(jwtHelper.isTokenExpired(token));
            }
            return false;
        }
    });

})();