(() => {
    'use strict';

    var module = angular.module("academik");

    module.value("greetValue", "Hello world! - Value");

    module.value("calculatorValue", {
        add: (a, b) => { return parseInt(a) + parseInt(b); },
        subs: (a, b) => { return parseInt(a) - parseInt(b); },
        multiplication: (a, b) => { return parseInt(a) * parseInt(b); },
        division: (a, b) => { return parseInt(a) / parseInt(b); },
        pow: (a) => { return parseInt(a) * parseInt(a) }
    });

    module.value("piValue", 3.1416);

    module.value("urlsValue", {
        chuckNorrisApi: {
            baseUrl: "https://api.chucknorris.io/jokes",
            random: "/random",
            categories: "/categories",
            categoryParam: "?category=",
            query: "/search?query=",
        },
        pokeApi: {
            baseUrl: "https://pokeapi.co/api/v2",
            pokemon: "/pokemon",
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