// ==UserScript==
// @name         Static Course Menu
// @namespace    https://github.com/cotitto/canvas-userscripts
// @version      1.1
// @description  Static Course Menu
// @author       XCT
// @include      https://*.instructure.com/courses/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('.with-left-side, #left-side').css('position', 'sticky')
    $('.ic-Layout-contentMain').css('margin-top', '-1000px')
    $('#left-side').css({"padding-top": "20px", "margin-left": "-200px"});
})();
