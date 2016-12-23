'use strict';

angular
    .module('ts.main.activity')
    .component('tsMainActivity', {
        templateUrl: 'app/activities/main/main.activity.html',
        controller: ['$scope', function($scope) {
            var vm = this;

            vm.showAccountsActivity = true;

            $scope.$on('accounts.toolbar.show', function() {
                vm.showAccountsActivity = true;
            });
            $scope.$on('accounts.toolbar.hide', function() {
                vm.showAccountsActivity = false;
            });
        }]
    });
