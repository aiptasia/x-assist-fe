'use strict';

angular
    .module('ts.components.navbar')
    .component('tsNavbar', {
        templateUrl: 'app/core/components/navbar/navbar.component.html',
        bindings: {
            "navs": "<",
            "onClick": "&"
        },
        transclude: true,
        controller: function($transclude) {
            var vm = this;

            vm.onItemClick = function(item) {
                vm.onClick({item: item});
            }
        }
    })
