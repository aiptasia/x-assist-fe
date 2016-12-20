'use strict';

angular
    .module('ts.layout.header')
    .component('tsHeader', {
        templateUrl: 'app/layout/header/header.component.html',
        bindings: {
            "mainNav": "<",
            "subNav": "<",
            "onClick": "&"
        },
        controller: function() {
            var vm = this;

            vm.onItemClick = function(item) {
                vm.onClick({item: item});
            };
        }
    });
