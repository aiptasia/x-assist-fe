'use strict';

angular
    .module('ts.accounts-manager.activity')
    .component('tsAccount', {
        templateUrl: 'app/activities/accounts-manager/components/account/account.component.html',
        bindings: {
            "account": "<"
        }
    });
