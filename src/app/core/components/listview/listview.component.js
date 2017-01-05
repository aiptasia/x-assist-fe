'use strict';

angular
    .module('ts.components.listview')
    .component('tsListview', {
        templateUrl: 'app/core/components/listview/listview.component.html',
        bindings: {
            "items": "<"
        },
        transclude: true,
        controller: function() {
            var vm = this;

            vm.onClick = function(item) {
                item.active = !item.active;
            }
        }
    });
