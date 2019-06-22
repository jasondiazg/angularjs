(() => {
    "use strict";

    let module = angular.module("academik");

    module.filter("dpi", () => {
        return (dpi) => {
            if (isNaN(dpi)) {
                return "dpi invalid, it must be a number";
            } else if (dpi.toString().length < 12 || dpi.toString().length > 13) {
                return "dpi invalid, it must have length 12 or 13";
            } else if (dpi.toString().includes(".") || dpi.toString().includes("-") || dpi.toString().includes("#")) {
                return "dpi invalid, it must not contain . - #";
            } else {
                if (dpi.toString().length == 12) {
                    return dpi.toString().substring(0, 4) + "-" + dpi.toString().substring(4, 8) + "-" + dpi.toString().substring(8, 11);
                }
                return dpi.toString().substring(0, 4) + "-" + dpi.toString().substring(4, 9) + "-" + dpi.toString().substring(9, 12);
            }
        }
    })

})();