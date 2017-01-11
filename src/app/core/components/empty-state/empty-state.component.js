'use strict';

// <ts-empty-state>
// input param: icon (string)
// input param: title (string)
// input param: subtitle (string)

angular
    .module('ts.components.empty-state')
    .component('tsEmptyState', {
        templateUrl: 'app/core/components/empty-state/empty-state.component.html',
        bindings: {
            "icon": "@",
            "title": "@",
            "subtitle": "@"
        },
        transclude: true
    });
