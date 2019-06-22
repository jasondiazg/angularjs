(() => {
    'use strict';
    let mainModule = angular.module("academik");

    mainModule.controller("FiltersController", function() {
        let vm = this;

        let setDefaults = () => {
            loadData();
            dateFilters();
            limitFilters();
        }

        let loadData = () => {
            vm.infinityStones = [
                {name:'Soul', color:'orange'},
                {name:'Mind', color:'yellow'},
                {name:'Power', color:'purple'},
                {name:'Time', color:'green'},
                {name:'Reality', color:'red'},
                {name:'Space', color:'blue'}
            ];
        }

        let dateFilters = () => {
            vm.currentDate = new Date();
        }

        let limitFilters = () => {
            vm.numbers = [1,2,3,4,5,6,7,8,9];
            vm.letters = "abcdefghijklmnopqrstuvwxyz";
            vm.longNumber = 98877665544321;
            vm.numLimit = 3;
            vm.letterLimit = 3;
            vm.longNumberLimit = 3;
        }

        setDefaults();
    });


})();