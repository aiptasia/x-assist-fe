'use strict';

angular
    .module('ts.main.activity')
    .component('tsMainActivity', {
        templateUrl: 'app/activities/main/main.activity.html',
        controller: ['$scope', function($scope) {
            var vm = this;

            vm.showProjectAccounts = false;
            vm.showAccountsManager = false;

            $scope.$on('on.project-accounts.open', function() {
                vm.showAccountsManager = false;
                vm.showProjectAccounts = true;
            });
            $scope.$on('on.project-accounts.close', function() {
                vm.showProjectAccounts = false;
            });
            $scope.$on('on.accounts-manager.open', function() {
                vm.showProjectAccounts = false;
                vm.showAccountsManager = true;
            });
            $scope.$on('on.accounts-manager.close', function() {
                vm.showAccountsManager = false;
                vm.showProjectAccounts = true;
            });
        }]
    });
