'use strict';

angular
    .module('ts.components.dropdown')
    .component('tsDropdown', {
        templateUrl: 'app/core/components/dropdown/dropdown.component.html',
        bindings: {
            "button": "<",
            "items": "<",
            "data": "<",
            "onClick": "&"
        },
        transclude: true,
        controller: function() {
            var vm = this;

            vm.$onInit = function() {
                if (vm.data) {
                    vm.button = vm.data.button;
                    vm.items = vm.data.items;
                }
            }

            vm.onItemClick = function(item) {
                vm.onClick({item: item});
            }
        }
    });
