(() => {
    'use strict';

    var module = angular.module("academik");

    module.constant("greet", "Hello world - Constant!");

    module.constant("calculator", {
        add: (a, b) => { return parseInt(a) + parseInt(b); },
        subs: (a, b) => { return parseInt(a) - parseInt(b); },
        multiplication: (a, b) => { return parseInt(a)* parseInt(b); },
        division: (a, b) => { return parseInt(a) / parseInt(b); },
        pow: (a) => { return parseInt(a) * parseInt(a) }
    });

    module.constant("pi", 3.1416);

    module.constant("urls", {
        chuckNorrisApi: {
            baseUrl: "https://api.chucknorris.io/jokes",
            random: "/random",
            categories: "/categories",
            categoryParam: "?category=",
            query: "/search?query=",
        },
        pokeApi: {
            baseUrl: "https://pokeapi.co/api/v2",
            pokemo: "/pokemon",
            type: "/type",
            ability: "/ability"
        },
        myBackendApi: {
            baseUrl: "http://localhost:8080/api",
            person: "/person",
            animal: "/animal"
        }
    });
})();