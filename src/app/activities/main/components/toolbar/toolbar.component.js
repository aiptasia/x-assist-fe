'use strict';

angular
    .module('ts.main.activity')
    .component('tsMainToolbar', {
        templateUrl: 'app/activities/main/components/toolbar/toolbar.component.html',
        bindings: {},
        controller: ['$scope', '$location',
            function($scope, $location) {
                var vm = this;

                vm.onMainActivityOpen = function() {
                    $location.url('');
                }

                vm.onProjectAccountsActivityOpen = function() {
                    $scope.$emit('on.project-accounts.open');
                }

                vm.onContentPlanActivityOpen = function() {
                    $location.url('content-plan');
                }

                vm.onNewPostActivityOpen = function() {
                    $location.url('new-post');
                }
            }
        ]
    });
