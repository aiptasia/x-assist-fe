'use strict';

angular
    .module('ts.accounts.activity')
    .component('tsAccountList', {
        templateUrl: 'app/activities/accounts/components/account-list/account-list.component.html',
        bindings: {
            "accounts": "<"
        }
    });
