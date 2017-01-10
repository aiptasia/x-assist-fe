'use strict';

angular
    .module('ts.accounts-manager.activity')
    .component('tsAccountList', {
        templateUrl: 'app/activities/accounts-manager/components/account-list/account-list.component.html',
        bindings: {
            "accounts": "<"
        }
    });
