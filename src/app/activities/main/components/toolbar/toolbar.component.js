'use strict';

angular
    .module('ts.main.activity')
    .component('tsMainToolbar', {
        templateUrl: 'app/activities/main/components/toolbar/toolbar.component.html',
        bindings: {
        },
        controller: function() {
            var vm = this;

            vm.toolbar = [{
            }];
        }
    });
