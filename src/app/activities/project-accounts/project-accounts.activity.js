'use strict';

angular
    .module('ts.project-accounts.activity')
    .component('tsProjectAccounts', {
        templateUrl: 'app/activities/project-accounts/project-accounts.activity.html',
        bindings: {},
        controller: ['$scope',
            function($scope) {
                var vm = this;

                vm.onAccountsManagerOpen = function() {
                    $scope.$emit('on.accounts-manager.open');
                }
            }
        ]
    });
