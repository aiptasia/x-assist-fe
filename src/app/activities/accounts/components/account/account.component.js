'use strict';

angular
    .module('ts.accounts.activity')
    .component('tsAccount', {
        templateUrl: 'app/activities/accounts/components/account/account.component.html',
        bindings: {
            "account": "<"
        }
    });
