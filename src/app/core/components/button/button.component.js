'use strict';

angular
    .module('ts.components.button')
    .component('tsButton', {
        templateUrl: 'app/core/components/button/button.component.html',
        bindings: {
            "title": "@",
            "svg": "@",
            "data": "<"
        },
        controller: function() {
            var vm = this;

            vm.$onInit = function() {
                if (vm.data) {
                    vm.title = vm.data.title;
                    vm.svg = vm.data.svg;
                }
            }
        }
    });
