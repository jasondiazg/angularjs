(() => {
    'use strict';
    let mainModule = angular.module("academik");

    mainModule.controller("CalculatorController", function (calculator, pi, $logger, Notifier) {
        let vm = this;

        let setDefaults = () => {
            vm.notifier = new Notifier(true);
        }

        vm.sum = () => {
            vm.result = calculator.add(vm.operator1, vm.operator2);
            vm.notifier.success(getMessage("sum"));
            printLogger("sum");
        }

        vm.subs = () => {
            vm.result = calculator.subs(vm.operator1, vm.operator2);
            vm.notifier.info(getMessage("subs"));
            printLogger("subs");
        }

        vm.multiplication = () => {
            vm.result = calculator.multiplication(vm.operator1, vm.operator2);
            vm.notifier.error(getMessage("multiplication"));
            printLogger("multiplication");
        }

        vm.division = () => {
            vm.result = calculator.division(vm.operator1, vm.operator2);
            vm.notifier.question(getMessage("division"));
            printLogger("division");
        }

        vm.pow = () => {
            vm.result = calculator.pow(vm.operator1);
            vm.notifier.success(getMessage("pow"));
            printLogger("pow");
        }

        vm.getRadio = () => {
            vm.result = 2 * pi * vm.radio * vm.radio;
            vm.notifier.success(getMessage("getRadio"));
            printLogger("getRadio");
        }

        let printLogger = (operation) => {
            $logger.print(getMessage(operation));
        }

        let getMessage = (operation) => {
            return "The result of operation " + operation + " is " + vm.result;
        }

        setDefaults();
    });


})();