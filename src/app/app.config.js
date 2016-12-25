'use strict';

angular
    .module('ts')
    .config(['$compileProvider', function($compileProvider) {
        // $compileProvider.debugInfoEnabled(false);

        $compileProvider.commentDirectivesEnabled(false);
        $compileProvider.cssClassDirectivesEnabled(false);
    }]);
