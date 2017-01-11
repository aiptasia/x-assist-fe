'use strict';

// <ts-network-list>
// input param: svg (string)
// input param: href (string)

angular
    .module('ts.accounts-manager.activity')
    .component('tsNetworkList', {
        templateUrl: 'app/activities/accounts-manager/components/network-list/network-list.component.html',
        bindings: {
            "networks": "<"
        }
    });
