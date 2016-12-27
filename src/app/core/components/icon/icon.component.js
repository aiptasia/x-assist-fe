'use strict';

angular
    .module('ts.components.icon')
    .component('tsIcon', {
        templateUrl: 'app/core/components/icon/icon.component.html',
        bindings: {
            "svg": "@"
        },
        controller: ['config', function(config) {
            var vm = this;

            vm.getIcon = function() {
                return config.iconsFileName + '#' + vm.svg;
            }
        }]
    });
