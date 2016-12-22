'use strict';

angular
    .module('ts.accounts.activity')
    .component('tsAccountsToolbar', {
        templateUrl: 'app/activities/accounts/components/toolbar/toolbar.component.html',
        bindings: {
        },
        controller: function() {
            var vm = this;

            vm.toolbar = [{
                type: 'button',
                svg: 'assets/images/icons.svg#icon-cross',
                onClick: function() {
                    console.log('cross');
                }
            }];
        }
    });
