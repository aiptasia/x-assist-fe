'use strict';

angular
    .module('ts')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/', {
                    template: 'main view'
                })
                .when('/new-post', {
                    template: '<ts-new-post></ts-new-post>'
                })
                .otherwise('/');
        }
    ])
