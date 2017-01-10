'use strict';

angular
    .module('ts.accounts-manager.activity')
    .component('tsNetworkList', {
        templateUrl: 'app/activities/accounts-manager/components/network-list/network-list.component.html',
        bindings: {
            "networks": "<"
        }
    });
