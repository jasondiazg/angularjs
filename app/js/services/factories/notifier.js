(() => {
    'use strict';

    var module = angular.module("academik");

    module.factory("Notifier", function ($logger) {

        var notifier = function (logger) {
            let toast = swal.mixin({ toast: true, position: "bottom-end", showConfirmButton: false, timer: 3000 });

            this.success = (message) => {
                toast({ type: "success", title: message });
                if (logger) {
                    $logger.print("Type: success, message: " + message);
                }
            }

            this.error = (message) => {
                toast({ type: "error", title: message });
                if (logger) {
                    $logger.print("Type: error, message: " + message);
                }
            }

            this.info = (message) => {
                toast({ type: "info", title: message });
                if (logger) {
                    $logger.print("Type: info, message: " + message);
                }
            }

            this.question = (message) => {
                toast({ type: "question", title: message });
                if (logger) {
                    $logger.print("Type: question, message: " + message);
                }
            }
        };

        return notifier;
    });

})();