'use strict';

angular
    .module('ts.components.button')
    .component('tsButton', {
        templateUrl: 'app/core/components/button/button.component.html',
        bindings: {
            "title": "@",
            "svg": "@"
        }
    });
