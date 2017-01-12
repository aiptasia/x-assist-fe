'use strict';

// <ts-multiline>
// input param: title (string)
// input param: subtitle (string)

angular
    .module('ts.components.multiline')
    .component('tsMultiline', {
        templateUrl: 'app/core/components/multiline/multiline.component.html',
        bindings: {
            "title": "@",
            "subtitle": "@"
        }
    });
