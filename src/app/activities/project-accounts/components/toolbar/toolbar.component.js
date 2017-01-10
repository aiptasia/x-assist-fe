'use strict';

angular
    .module('ts.project-accounts.activity')
    .component('tsProjectAccountsToolbar', {
        templateUrl: 'app/activities/project-accounts/components/toolbar/toolbar.component.html',
        bindings: {},
        controller: ['$scope', function($scope) {
            var vm = this;

            vm.onProjectAccountsClose = function() {
                $scope.$emit('on.project-accounts.close');
            }
            vm.onAccountsManagerOpen = function() {
                $scope.$emit('on.accounts-manager.open');
            }
        }]
    });
