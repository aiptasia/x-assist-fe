'use strict';

angular
    .module('ts.accounts-manager.activity')
    .component('tsAccountsManager', {
        templateUrl: 'app/activities/accounts-manager/accounts-manager.activity.html',
        bindings: {},
        controller: function() {
            var vm = this;

            vm.accounts = [{
                "name": "HyperFlow",
                "img_xs": "https://pp.vk.me/c629424/v629424495/2726/LdUkRL5VOCc.jpg"
            }, {
                "name": "TechRacing",
                "img_xs": "https://pp.vk.me/c627425/v627425531/2284f/SA-8KLc32AI.jpg"
            }, {
                "name": "test",
                "img_xs": "https://vk.com/images/community_50.png"
            }];
        }
    });
