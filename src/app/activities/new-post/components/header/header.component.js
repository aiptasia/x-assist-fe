'use strict';

angular
    .module('ts.new-post.activity')
    .component('tsNewPostHeader', {
        templateUrl: 'app/activities/new-post/components/header/header.component.html',
        bindings: {},
        controller: ['$scope', '$location',
            function($scope, $location) {
                var vm = this;
            }
        ]
    });
