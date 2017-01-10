'use strict';

angular
    .module('ts.components.toolbar')
    .component('tsToolbar', {
        transclude: 'true',
        controller: ['$element', '$transclude',
            function($element, $transclude) {
                $element.append($transclude());
            }
        ]
    })
