(function () {
    'use strict';

    angular
        .module('demoApp')
        .config(materialDesignConfig);

    function materialDesignConfig() {
        // Initialize material design
        $.material.init();
    }
})();
