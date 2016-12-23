'use strict';

angular
    .module('ts.main.activity')
    .component('tsMainToolbar', {
        templateUrl: 'app/activities/main/components/toolbar/toolbar.component.html',
        bindings: {
        },
        controller: ['$scope', function($scope) {
            var vm = this;

            vm.toolbar = [{
                type: 'button',
                svg: 'assets/images/icons.svg#icon-accounts',
                onClick: function() {
                    $scope.$emit('accounts.toolbar.show');
                }
            }];
        }]
    });
