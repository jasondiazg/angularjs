(() => {
    'use strict';

    let module = angular.module("academik");

    module.filter('ordinal', () => {
        return (number) => {
            if (isNaN(number) || number < 1) {
                return number;
            } else {
                let lastDigit = number % 10;
                //let lastDigit = number.toString().substring(number.toString().length - 1, number.toString().length).parseInt();
                if (lastDigit === 1) {
                    return number + 'st';
                } else if (lastDigit === 2) {
                    return number + 'nd';
                } else if (lastDigit === 3) {
                    return number + 'rd';
                } else if (lastDigit > 3) {
                    return number + 'th';
                }
            }
        }
    })

})();