'use strict';

angular
    .module('ts.accounts.activity')
    .component('tsNetworkList', {
        templateUrl: 'app/activities/accounts/components/network-list/network-list.component.html',
        bindings: {
            "networks": "<"
        }
    });
