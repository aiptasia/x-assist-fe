'use strict';

angular
    .module('ts.components.toolbar')
    .component('tsToolbar', {
        templateUrl: 'app/core/components/toolbar/toolbar.component.html',
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
