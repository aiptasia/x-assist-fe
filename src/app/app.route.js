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
                .otherwise('/');
        }
    ])
