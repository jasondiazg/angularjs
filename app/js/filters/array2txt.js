(() => {
    'use strict';

    let module = angular.module("academik");

    module.filter('array2txt', () => {
        return (array) => {
            if (array instanceof Array) {
                if (array.length == 1) {
                    return array[0];
                } else {
                    let txt = "";
                    array.forEach(element => txt += element + ", ");
                    return txt.substring(txt.length-2, txt.length-1);
                }
            }
            return "";
        }
    })

})();