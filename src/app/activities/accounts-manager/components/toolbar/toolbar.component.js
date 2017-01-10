'use strict';

angular
    .module('ts.accounts-manager.activity')
    .component('tsAccountsToolbar', {
        templateUrl: 'app/activities/accounts-manager/components/toolbar/toolbar.component.html',
        bindings: {
        },
        controller: ['$scope', function($scope) {
            var vm = this;

            vm.toolbar = [{
                type: 'button',
                svg: 'assets/images/icons.svg#icon-close',
                onClick: function() {
                    $scope.$emit('accounts.toolbar.hide');
                }
            }];
        }]
    });
