'use strict';

angular
    .module('ts.accounts-manager.activity')
    .component('tsAccountsManagerToolbar', {
        templateUrl: 'app/activities/accounts-manager/components/toolbar/toolbar.component.html',
        bindings: {},
        controller: ['$scope', function($scope) {
            var vm = this;

            vm.onAccountsManagerClose = function() {
                $scope.$emit('on.accounts-manager.close');
            }
        }]
    });
